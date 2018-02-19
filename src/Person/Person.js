import React from 'react';
import './Person.css';

const person = (props) => (
    <div className='Person'>
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old! {props.children}</p>
    <input tyoe='text' onChange={props.input} ></input>
    </div>
);
// value={props.name} - for two way binding in the input

export default person;