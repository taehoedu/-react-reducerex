import React, { useEffect, useState } from "react";
import '../../css/member.css';

const MemberRow = ({member}) => {

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

    }, []);

    return(
        <>
            <input className="member" type="text" value={mNo} readOnly />
            <input className="member" type="text" onChange={(e) => {setMName(e.target.value)}} value={mName} />
            <button>MOD</button>
            <input className="member" type="text" onChange={(e) => {setMGender(e.target.value)}} value={mGender} />
            <input className="member" type="number" onChange={(e) => {setMAge(e.target.value)}} value={mAge} />
            <button>MOD</button>
            <input className="member" type="text" onChange={(e) => {setMMail(e.target.value)}} value={mMail} />
            <button>MOD</button>
            <input className="member" type="text" onChange={(e) => {setMPhone(e.target.value)}} value={mPhone} />
            <button>MOD</button>
            <button>DEL</button>
            <br />
        </>
    );
}

export default MemberRow;