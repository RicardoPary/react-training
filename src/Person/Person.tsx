import React from 'react';

const Person = (props: any) => {
    return (
        <div>
            <p>I am {props.name} is {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;
