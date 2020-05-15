import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'
import '../css/App.css';

class Fade extends Component{

    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
            show : !this.state.show ? true : false
        })
    }

    render(){
        return(
            <div>
                <CSSTransition
                in={this.state.show}
                timeout={2000}
                classNames="square"
                >
                    <div className={`square ${this.state.show}`}>
                        hello
                    </div>
                </CSSTransition>
                <Button onClick={this.showDiv} >Show or Hide</Button>
            </div>
        )
    }
}


export default Fade;