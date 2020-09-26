import React from 'react'

export default function Welcome1(props)
{
    var {fname,adress,id,lname,age}=props.user;
    var t=age>=20?"youre ok":"youre not ok";
return <h1>hello {fname} {lname} <h1>your adress is {adress} </h1>{t} </h1>
}



