import React, { useEffect, useState } from "react";
import '../../css/member.css';

const MemberRow = ({member, dispatch_members}) => {

    const [mNo, setMNo] = useState('');
    const [mName, setMName] = useState('');
    const [mGender, setMGender] = useState('');
    const [mAge, setMAge] = useState('');
    const [mMail, setMMail] = useState('');
    const [mPhone, setMPhone] = useState('');

    useEffect(() => {

        setMNo(member.mNo);
        setMName(member.mName);
        setMGender(member.mGender);
        setMAge(member.mAge);
        setMMail(member.mMail);
        setMPhone(member.mPhone);

    }, [member]);

    return(
        <>
            <input className="member" style={{width: '150px'}}type="text" value={mNo} readOnly />
            <input className="member" type="text" onChange={(e) => {setMName(e.target.value)}} value={mName} />
            <button onClick={() => {
                dispatch_members({
                    type: 'MODIFY_MEMBER_NAME',
                    mNo,
                    modifyMemerName: mName,
                })
            }}>MOD</button>
            <select name="mGender" value={mGender} onChange={(e) => {setMGender(e.target.value)}}>
                <option value=''>-- SELECT GENDER --</option>
                <option value='M'>M</option>
                <option value='W'>W</option>
            </select>
            <button onClick={() => {
                dispatch_members({
                    type: 'MODIFY_MEMBER_GENDER',
                    mNo,
                    modifyMemerGender: mGender,
                })
            }}>MOD</button>
            <input className="member" type="number" onChange={(e) => {setMAge(e.target.value)}} value={mAge} />
            <button onClick={() => {
                dispatch_members({
                    type: 'MODIFY_MEMBER_AGE',
                    mNo,
                    modifyMemerAge: mAge,
                })
            }}>MOD</button>
            <input className="member" type="text" onChange={(e) => {setMMail(e.target.value)}} value={mMail} />
            <button onClick={() => {
                dispatch_members({
                    type: 'MODIFY_MEMBER_MAIL',
                    mNo,
                    modifyMemerMail: mMail,
                })
            }}>MOD</button>
            <input className="member" type="text" onChange={(e) => {setMPhone(e.target.value)}} value={mPhone} />
            <button onClick={() => {
                dispatch_members({
                    type: 'MODIFY_MEMBER_PHONE',
                    mNo,
                    modifyMemerPhone: mPhone,
                })
            }}>MOD</button>
            <button onClick={() => {
                dispatch_members({
                    type: 'DELETE_MEMBER',
                    mNo,
                })
            }}>DEL</button>
            <br />
        </>
    );
}

export default MemberRow;