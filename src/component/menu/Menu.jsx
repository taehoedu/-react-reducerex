import React, { useReducer } from "react";
import '../..//css/menu.css';
import MainMenu from "./MainMenu";

const reducer_mainmenu = (state, action) => {
    console.log('reducer_mainmenu()');

    switch(action.type) {
        case 'add_mainmenu':
            return [...state, 'MainMenu' + state.length];
            
        default:
            return state;

    }

}

function Menu() {

    // hook
    const [mainmenus, dispatch_add_menu] = useReducer(reducer_mainmenu, []);

    return(
        <>

            {
                mainmenus.map((mainmenu, idx) => <MainMenu mainmenu={mainmenu} key={idx} />)
            }
            <button onClick={() => {
                dispatch_add_menu({
                    type: 'add_mainmenu',
        
                });
            }}>Add MainMenu</button>
        </>
    );

}

export default Menu;