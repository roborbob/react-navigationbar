import React, {Component} from 'react';
import {Keyframes} from 'react-spring/renderprops';
import './Navigation.scss';

const DivOne = Keyframes.Spring({
    undefined: [{top: 0},{transform: "rotate(0deg)"}],
    open: [{top: 12, config:{tension: 450}},{transform: "rotate(405deg)", config:{tension: 380}}],
    close: [{transform: "rotate(0deg)"},{top: 0}]
  })
const DivTwo = Keyframes.Spring({
    undefined: {top: 12},
    open: {opacity: 0},
    close: {opacity: 1}
  })
const DivThree = Keyframes.Spring({
    undefined: [{bottom: 0}, {transform: "rotate(0deg)"}],
    open: [{bottom: 12, config:{tension: 450}},{transform: "rotate(315deg)", config:{tension: 350}}],
    close: [{transform: "rotate(0deg)"},{bottom: 0}]
  })

class Navigation extends Component {
     state = {
        toggle: undefined
     }
     toggle = () => {
         this.setState(state => ({ toggle: !state.toggle}))
     }

    render(props) {
        const state = this.state.toggle === undefined ? "undefined" : this.state.toggle ? "open" : "close"
        return (
            <nav className="navigation">
                <div className="search">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/>
                    </svg>
                </div>
                <div className="app-title">
                    <h1>App</h1>
                </div>
                <div onClick={this.toggle} className="burger-menu">
                <DivOne
                    state={state}
                    toggle={this.toggle}
                >{ props => <div style={props}></div>}
                </DivOne>
                <DivTwo
                    state={state}
                    toggle={this.toggle}
                >{ props => <div style={props}></div>}
                </DivTwo>
                <DivThree
                    state={state}
                    toggle={this.toggle}
                >{ props => <div style={props}></div>}
                </DivThree>                
                </div>
            </nav>
        )
    }

}

export default Navigation;