import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Person from "./Person/Person";

const App = () => {

    let state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: "Ricardo", age: 22}
        ],
        otherState: 'Some other value'
    };

    let switchNameHandler = () => {
        console.log('Was clicked!');
    };

    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={state.persons[0].name} age={state.persons[0].age}></Person>
            <Person name="Ricardo" age="23">My hobbies: Play</Person>
            <Person name="Juan" age="34"></Person>
        </div>
    );
}

export default App;
