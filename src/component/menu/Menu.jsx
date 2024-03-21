import React, { useReducer } from "react";
import '../..//css/menu.css';
import MainMenu from "./MainMenu";

const reducer_mainmenu = (state, action) => {
    console.log('reducer_mainmenu()');

    switch(action.type) {
        case 'add_mainmenu':
            return [...state, action.mainMenuName];

        default:
            return state;

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

function Menu() {

    // hook
    const [mainmenus, dispatch_add_menu] = useReducer(reducer_mainmenu, []);
    const [mainMenuName, dispatch_menu_name] = useReducer(reducer_menu_name, '');

    return(
        <>

            {
                mainmenus.map((mainmenu, idx) => <MainMenu mainmenu={mainmenu} key={idx} />)
            }
            <input type="text" onChange={(e) => {
                dispatch_menu_name({
                    type: 'change_menu_name',
                    menu_name: e.target.value,
                });
            }} value={mainMenuName}/><button onClick={() => {
                dispatch_add_menu({
                    type: 'add_mainmenu',
                    mainMenuName,
                });
                dispatch_menu_name({
                    type: 'init',
                });
            }}>Add MainMenu</button>
        </>
    );

}

export default Menu;