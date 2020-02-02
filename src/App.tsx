import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Person from "./Person/Person";

const App = () => {

    let [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: "Ricardo", age: 10000000000000}
        ],
        otherState: 'Some other value'
    });


    let switchNameHandler = (newName: any) => {
        console.log('Was clicked!');
        setPersonsState({
            persons: [
                {name: newName, age: 3333333},
                {name: 'Manu', age: 55555},
                {name: "Ricardo", age: 100}
            ],
            otherState: 'Some other value'
        });
    };

    let nameChangedHandler = (event: any) => {
        setPersonsState({
            persons: [
                {name: 'sss', age: 3333333},
                {name: event.target.value, age: 55555},
                {name: "Ricardo", age: 1111111111111111111111111}
            ],
            otherState: 'Some other value'
        });
    };

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
            <button
                style={style}
                onClick={() => switchNameHandler('Ricardooooooooooooooo')}>Switch name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}></Person>
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                click={switchNameHandler}
                changed={nameChangedHandler}>My hobbies: Play</Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}></Person>
        </div>
    );
}

export default App;
