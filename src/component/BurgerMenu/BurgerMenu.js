import React from 'react';
import './BurgerMenu.scss';
import { Keyframes } from 'react-spring/renderprops';

const DivOne = Keyframes.Spring({
    open: [{top: 12, config:{tension: 450}, transform: "rotate(405deg)"}],
    close: [{transform: "rotate(0deg)", top: 0}]
  })
const DivTwo = Keyframes.Spring({
    open: {opacity: 0},
    close: {opacity: 1, top:12}
  })
const DivThree = Keyframes.Spring({
    open: [{bottom: 12, config:{tension: 450}, transform: "rotate(315deg)"}],
    close: [{transform: "rotate(0deg)", bottom: 0}]
  })

const BurgerMenu = (props) => {
        const state = props.toggle ? "open" : "close"
        return (
            <div onClick={props.clicked} className="burger-menu">
                <DivOne
                    state={state}
                >{ props => <div style={props}></div>}
                </DivOne>
                <DivTwo
                    state={state}
                >{ props => <div style={props}></div>}
                </DivTwo>
                <DivThree
                    state={state}
                >{ props => <div style={props}></div>}
                </DivThree>                
            </div>
        )
}

export default BurgerMenu;