import React, { useReducer, useState } from "react";
import MemberRow from "./MemberRow";
import { getTimeStr } from '../util/util';


const reducer_members = (state, action) => {
    console.log('reducer_members()');

    if (action.type === 'ADD_NEW_MEMBER') {

        state[action.newMemerInfo.mNo] = action.newMemerInfo;
        return {...state};

    } else if (action.type === 'MODIFY_MEMBER_NAME') {

        state[action.mNo]['mName'] = action.modifyMemerName;
        return {...state};

    } else if (action.type === 'MODIFY_MEMBER_GENDER') {

        state[action.mNo]['mGender'] = action.modifyMemerGender;
        return {...state};

    } else if (action.type === 'MODIFY_MEMBER_AGE') {

        state[action.mNo]['mAge'] = action.modifyMemerAge;
        return {...state};

    } else if (action.type === 'MODIFY_MEMBER_MAIL') {

        state[action.mNo]['mMail'] = action.modifyMemerMail;
        return {...state};

    } else if (action.type === 'MODIFY_MEMBER_PHONE') {

        state[action.mNo]['mPhone'] = action.modifyMemerPhone;
        return {...state};

    } else if (action.type === 'DELETE_MEMBER') {

        delete state[action.mNo];
        return {...state};

    } else {
        return state;

    }

}

let sampleMembers = {
    '2023220018433111': {
        mNo: '2023220018433111',
        mName: 'Hong gildong',
        mGender: 'W',
        mAge: 25,
        mMail: 'gildong@gmail.com',
        mPhone: '010-1234-5678',
    },
}

function Member() {

    // hook
    const [mName, setMName] = useState('');
    const [mGender, setMGender] = useState('');
    const [mAge, setMAge] = useState('');
    const [mMail, setMMail] = useState('');
    const [mPhone, setMPhone] = useState('');

    const [members, dispatch_members] = useReducer(reducer_members, sampleMembers);

    // handler
    const addNewMemberClickBtnHandler = () => {
        console.log('addNewMemberClickBtnHandler()');

        dispatch_members({
            type: 'ADD_NEW_MEMBER',
            newMemerInfo: {
                mNo: getTimeStr(),
                mName,
                mGender,
                mAge,
                mMail,
                mPhone,
            }
        });

        setMName('');  setMGender('');  setMAge('');  setMMail('');  setMPhone('');

    }

    return(
        <>
            <h4>OUR SPORT CENTER MEMBERSHIP</h4>

            <input type="text" name="mName" value={mName} onChange={(e) => {setMName(e.target.value)}} placeholder="INPUT NAME"/><br />
            <select name="mGender" value={mGender} onChange={(e) => {setMGender(e.target.value)}}>
                <option value=''>-- SELECT GENDER --</option>
                <option value='M'>M</option>
                <option value='W'>W</option>
            </select><br />
            <input type="text" name="mAge" value={mAge} onChange={(e) => {setMAge(e.target.value)}} placeholder="INPUT AGE"/><br />
            <input type="text" name="mMail" value={mMail} onChange={(e) => {setMMail(e.target.value)}} placeholder="INPUT MAIL"/><br />
            <input type="text" name="mPhone" value={mPhone} onChange={(e) => {setMPhone(e.target.value)}} placeholder="INPUT PHONE"/><br />
            <button onClick={addNewMemberClickBtnHandler}>ADD NEW MEMBER</button><br /><br />

            <h4>OUR SPORT CENTER MEMBERS</h4>
            {
                Object.keys(members).map((mNo, idx) => {
                    let member = members[mNo];
                    return <MemberRow member={member} dispatch_members={dispatch_members} key={idx} />
                })
            }

        </>
    );
}

export default  Member;