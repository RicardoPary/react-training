import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Person from "./Person/Person";

const App = () => {

    let [personsState, setPersonsState] = useState({
        persons: [
            {id: 123, name: 'Max', age: 28},
            {id: 456, name: 'Manu', age: 29},
            {id: 789, name: "Ricardo", age: 10000000000000}
        ],
        otherState: 'Some other value',
        showPersons: false
    });


    let switchNameHandler = (newName: any) => {
        console.log('Was clicked!');
        setPersonsState({
            persons: [
                {id: 123, name: 'Max', age: 28},
                {id: 456, name: 'Manu', age: 29},
                {id: 789, name: "Ricardo", age: 10000000000000}
            ],
            otherState: 'Some other value',
            showPersons: false
        });
    };

    let nameChangedHandler = (event: any, id: any) => {

        const personIndex =personsState.persons.findIndex(p => p.id === id);
        const person = {...personsState.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...personsState.persons];
        persons[personIndex] = person;

        setPersonsState({...personsState, persons: persons});
    };

    let deletePersonHandler = (personIndex: any) => {
        const persons = [...personsState.persons];
        persons.splice(personIndex, 1);
        setPersonsState({...personsState, persons: persons});
    };

    let togglePersonHandler = () => {
        const doesShow = personsState.showPersons;
        setPersonsState({...personsState, showPersons: !doesShow});
    };

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if (personsState.showPersons) {
        persons = (
            <div>
                {
                    personsState.persons.map((person: any, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event: any) => nameChangedHandler(event, person.id)}
                            click={() => deletePersonHandler(index)}>My hobbies: Play</Person>
                    })
                }
            </div>
        );
    }

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
                onClick={togglePersonHandler}>Switch name
            </button>
            {persons}
        </div>
    );
}

export default App;
