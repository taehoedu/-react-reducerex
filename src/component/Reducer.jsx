import React, { useReducer, useState } from "react";

const reducer_result = (state, action) => {
    console.log('reducer_result()');

    switch(action.type) {
        case 'result':
            return state + action.number;

        default:
            return state;
            
    }

}

const reducer_number = (state, action) => {
    console.log('reducer_number()');

    switch(action.type) {
        case 'increase':
            return state + 1;

        case 'decrease':
            return state - 1;

        case 'reset_zero':
            return action.value;

        default:
            return state;
            
    }

}

function Reducer() {

    /*
    // hook
    const [result, setresult] = useState(0);
    const [number, setNumber] = useState(0);

    // handler
    const resultBtnClickHandler = () => {
        console.log('resultBtnClickHandler()');

        setresult(v => v + number);
        setNumber(0);
        
    }

    return(
        <>
            <input type="number" name="result" value={ result } onChange={ setresult }/>
            <br /><br />
            <input type="number" value={ number } onChange={ setNumber }/>
            <button onClick={() => { setNumber(v => v + 1); }}>increase</button>
            <button onClick={() => { setNumber(v => v - 1); }}>decrease</button>
            <button onClick={resultBtnClickHandler}>result</button>
        </>
    );
    */

    ///////////////////////////////////////////////////////////////////////////
    // hook
    const [result, dispatch_result] = useReducer(reducer_result, 0);
    const [number, dispatch_number] = useReducer(reducer_number, 0);

    return(
        <>
            <input type="number" onChange={dispatch_result} value={result} />
            <br /><br />
            <input type="number" onChange={dispatch_number} value={number}/>
            <button onClick={() => {
                dispatch_number({
                    type: 'increase',
                })
            }}>increase</button>
            <button onClick={() => {
                dispatch_number({
                    type: 'decrease',
                });
            }}>decrease</button>
            <button onClick={() => {
                dispatch_result({
                    type: 'result',
                    number,
                });
                dispatch_number({
                    type: 'reset_zero', 
                    value: 0,
                });

            }}>result</button>
        </>
    );

}

export default Reducer;