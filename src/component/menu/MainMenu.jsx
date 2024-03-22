import React, { useEffect, useReducer } from "react";
import SubMenu from "./SubMenu";

const reducer_submenu = (state, action) => {
    console.log('reducer_submenu()');

    switch(action.type) {
        case 'add_submenu':
            return [...state, action.subMenuName];
            
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

const reducer_menu_name = (state, action) => {
    console.log('reducer_menu_name()');

    switch(action.type) {
        case 'change_menu_name':
            return action.menu_name;
        case 'init':
            return '';
        default:
            return state;

    }

}

function MainMenu({mainmenu}) {

    const [submenus, dispatch_submenu] = useReducer(reducer_submenu, []);
    const [subMenuName, dispatch_menu_name] = useReducer(reducer_menu_name, '');

    return(
        <>
            <span>{mainmenu}</span>
            <br />
            {
                submenus.map((submenu, idx) => <SubMenu submenu={submenu} dispatch_submenu={dispatch_submenu} idx={idx} key={idx} />)
            }
            <input type="text" onChange={(e) => {
                dispatch_menu_name({
                    type: 'change_menu_name',
                    menu_name: e.target.value,
                });
            }} value={subMenuName} placeholder="INPUT NEW SUBMENU" />
            <button onClick={() => {
                if (subMenuName.trim() === '') {
                    alert('INPUT NEW SUBMENU NAME!!');
                    dispatch_menu_name({
                        type: 'init',
                    });
                    return;
                }
                dispatch_submenu({
                    type: 'add_submenu',
                    subMenuName,
                });
                dispatch_menu_name({
                    type: 'init',
                });
            }}>Add SubMenu</button><br /><br />
        </>
    );
}

export default MainMenu;