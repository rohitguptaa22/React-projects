/* eslint-disable no-lone-blocks */
import React from 'react';
import classes from './Input.module.css';

export default function Input(props) {
	{
		/*
    accepts 2 props most probably, 
    1. input object {} which contains all the configurations
       like id etch for the default <input {...porps.input}>
    2. label or input label name , which is editable from the parent tag
*/
	}
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input {...props.input} />
		</div>
	);
}
