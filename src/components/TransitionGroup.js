import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap'

class TransitionGroup extends Component {

    state = {
        items: [],
        show : true,
    }

    addElement = () => (
        this.state.items.map((item, i) => (
            <div key={i} className="addElement">
                {item}
            </div>
        ))
    )

    addButtonHanler = () => {
       let randomNumber = Math.floor(Math.random() * 100 ) + 1
       let itemsArray = [...this.state.items, randomNumber]
       this.setState({
           items : itemsArray
       })
    }
    
    removeButtonHanler = () => {
        let itemsArray = this.state.items.slice(0,-1)
        this.setState({
            items : itemsArray
        })
    }

    showHideHandler = () => {
        this.setState({
            show : !this.state.show ? true : false
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Button onClick={this.addButtonHanler} className="text-capitalize btn-lg" variant="success">add button</Button>
                        </Col>
                        <Col>
                            <Button onClick={this.removeButtonHanler} className="text-capitalize btn-lg" variant="danger">remove button</Button>
                        </Col>
                        <Col>
                            <Button onClick={this.showHideHandler} className="text-capitalize btn-lg" variant="info"> {this.state.show ? 'Hide' : 'Show' } </Button>
                        </Col>
                    </Row>
                    {this.state.show ?
                        <div className="mt-4">
                        {this.addElement()}
                    </div>
                    :
                    ''
                    }
                </Container>
            </div>
        );
    }
}

export default TransitionGroup;