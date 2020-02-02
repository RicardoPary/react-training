import React from 'react';
import './Person.css';

const Person = (props: any) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Person;
