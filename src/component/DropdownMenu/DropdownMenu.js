import React from 'react';
import './DropdownMenu.scss';
import { Keyframes } from 'react-spring/renderprops';


const NavMenu = Keyframes.Trail({
    open: {top: 80, opacity: 1, config:{tension: 250}},
    close: {top: -200, opacity: 0.0}
})

const DropdownMenu = (props) => {
        const state = props.toggle ? "open" : "close"
        const items = ["About", "Projects", "Store", "Contact"];
        return (
            <div className="menu">
                <ul>
                    <NavMenu
                        state={state}
                        items={items}
                    >{item => props => <li style={props}>{item}</li>}
                    </NavMenu>
                </ul>
            </div>
        )
}

export default DropdownMenu;

