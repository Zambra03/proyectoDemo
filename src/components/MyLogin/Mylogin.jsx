import React from 'react'
import MyInput from './MyInput';
const Mylogin = () => {
  return (
    <div>
        <MyInput label="Username:" name="username" type="username" style="label" style1="input input-username"/>
        <MyInput label="Password:" name="password" type="password" style="label" style1="input input-password"/>
    </div>
  );
}

export default Mylogin;
