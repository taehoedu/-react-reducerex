import React, { useReducer } from "react";
import MemberRow from "./MemberRow";

const reducer_members = (state, action) => {
    console.log('reducer_members()');
}

let sampleMembers = {
    '1234': {
        mNo: '1234',
        mName: 'Hong gildong',
        mGender: 'M',
        mAge: 25,
        mMail: 'gildong@gmail.com',
        mPhone: '010-1234-5678',
    },
    '5678': {
        mNo: '5678',
        mName: 'park chanho',
        mGender: 'M',
        mAge: 25,
        mMail: 'gildong@gmail.com',
        mPhone: '010-1234-5678',
    },
}

function Member() {

    // hook
    const [members, dispatch_members] = useReducer(reducer_members, sampleMembers);

    return(
        <>
            <h4>OUR SPORT CENTER MEMBERSHIP</h4>

            <input type="text" name="mName" placeholder="INPUT NAME"/><br />
            <select name="mGender">
                <option value=''>-- SELECT GENDER --</option>
                <option value='M'>M</option>
                <option value='W'>W</option>
            </select><br />
            <input type="text" name="mAge" placeholder="INPUT AGE"/><br />
            <input type="text" name="mMail" placeholder="INPUT MAIL"/><br />
            <input type="text" name="mPhone" placeholder="INPUT PHONE"/><br />
            <button>ADD NEW MEMBER</button><br /><br />

            <h4>OUR SPORT CENTER MEMBERS</h4>
            {
                Object.keys(members).map(mNo => members[mNo]).map((member, idx) => {
                    return <MemberRow member={member} key={idx}/>
                })
            }

        </>
    );
}

export default  Member;