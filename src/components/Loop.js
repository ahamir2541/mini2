import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class Loop extends Component {

    state = {
        color: 'red'
    }

    loop = () => {
        //    return <ul> {[...Array(100)].map((e, i) => {
        //        return <li key={i}>{i} + {e} </li>
        //    }) } </ul>
    }

    createElements = (n) => {
        let elements = []
        for (let i = 1; i <= n; i++) {
            elements.push(<div key={i} style={{
                margin : '5px'
            }}>
                <Button variant="warning" >world</Button>
            </div>)
        }
        return elements
    }

    colorChange = () => {
        // this.setState({
        //     color : 'blue'
        // })
        this.refs.mycolor.style.color = 'green'
    }

    render() {
        return (
            <div>
                <h4 style={{
                    color : this.state.color
                }} ref="mycolor" >hello world</h4>
                <div onClick={this.colorChange}>color change</div>
                {this.loop()}
                <ul>
                    {this.createElements(10)}
                </ul>
            </div>
        );
    }
}

export default Loop;