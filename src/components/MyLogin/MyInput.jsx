import React from 'react'

const MyInput = (props) => {
  return (
    <>
        <label htmlFor={props.name} className={props.style}>{props.label}</label>
        <input type={props.type} id={props.name} className={props.style1}/>
    </>
  );
}

export default MyInput;
