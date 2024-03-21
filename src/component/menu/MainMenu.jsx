import React, { useEffect, useReducer } from "react";
import SubMenu from "./SubMenu";

const reducer_submenu = (state, action) => {
    console.log('reducer_submenu()');

    switch(action.type) {
        case 'add_submenu':
            return [...state, 'SubMenu' + state.length];
            
        case 'up':
            if (action.idx > 0) {
                [state[action.idx - 1], state[action.idx]] = [state[action.idx], state[action.idx - 1]];
            } else {
                alert('Top level!!');
            }
            return [...state];

        case 'down':
            if (action.idx < state.length-1) {
                [state[action.idx + 1], state[action.idx]] = [state[action.idx], state[action.idx + 1]];
            } else {
                alert('Bottom level!!');
            }
            return [...state];
        
        case 'delete':
            let temp = state.filter((item, idx, err) => {
                if (idx != action.idx)
                    return item;
            });
            return [...temp];

        default:
            return [...state];

    }

}

function MainMenu({mainmenu}) {

    const [submenus, dispatch_submenu] = useReducer(reducer_submenu, []);

    return(
        <>
            <span>{mainmenu}</span>
            <br />
            {
                submenus.map((submenu, idx) => <SubMenu submenu={submenu} dispatch_submenu={dispatch_submenu} idx={idx} key={idx} />)
            }
            <button onClick={() => {
                dispatch_submenu({
                    type: 'add_submenu',
                });
            }}>Add SubMenu</button><br /><br />
        </>
    );
}

export default MainMenu;