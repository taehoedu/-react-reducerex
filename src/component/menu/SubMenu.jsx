import React from "react";

function SubMenu({submenu, dispatch_submenu, idx}) {
    return(
        <>
            <span>{submenu}</span>
            &nbsp;&nbsp;
            <button onClick={() => {
                dispatch_submenu({
                    type: 'up',
                    idx,
                });
            }}>↑</button>
            <button onClick={() => {
                dispatch_submenu({
                    type: 'down',
                    idx,
                });
            }}>↓</button>
            <button onClick={() => {
                dispatch_submenu({
                    type: 'delete',
                    idx,
                });
            }}>X</button>
            <br/>
        </>
    );
}

export default SubMenu;