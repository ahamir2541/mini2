import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import Transition from 'react-transition-group/Transition'
import '../css/App.css';

class TransitionComp extends Component {

    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
            show : !this.state.show ? true : false
        })
    }

    render() {
        return (
            <div>
                <Transition
                in={this.state.show}
                timeout={{
                    enter : 2000,
                    exit : 500
                }}
                enter={true}
                exit={true}

                onEnter={ (node) =>{
                    console.log('enter');
                } }
                
                onExit={ (node) =>{
                    console.log('Exited');
                } }
                >
                    { state => 
                        <div className={`square square-${state}`}>
                           {`square square-${state}`}
                        </div> 
                    }
                </Transition>
                <Button onClick={this.showDiv} >Show or Hide</Button>
             
            </div>
        )
    }
}


export default TransitionComp;