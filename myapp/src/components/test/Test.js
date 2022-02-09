import React, { Component } from 'react';

class Test extends Component {
    state = {
        title: '',
        completed: "",
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => this.setState({
            title: data.title,
            completed: data.completed
        }))
    }

    // componentWillMount(){
    //     console.log('componentWillMount!...')
    // }

    // componentDidUpdate(){
    //     console.log('componentDidUpdate!...')
    // }
    // componentWillReceiveProps(nextProps, nextState){
    //     console.log('componentWillReceiveProps!...')
    // }
    // static getDerivedStateFromProps(nextProps, prevState){
    //     return {
    //         test: 'something'
    //     }
    // }
    
    // getSnapshotBeforeUpdate(nextProps, nextState){
    //     console.log('getSnapshotBeforeUpdate!...')
    // }

    render() {
        const { title, completed } = this.state
        return (
            <div>
                <h1>{`The Topic titled ${title} is a ${completed} Topic`}</h1>
            </div>
        );
    }
}

export default Test;
