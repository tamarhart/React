import React, {useState} from 'react';
import Input1 from './input1'

function Input()
{
const [text,setText]=useState('');
function changeHendler(e)
{
   setText(e.target.value);
}
return(<div><p>{text}</p><Input1 onChange={changeHendler}/></div>)

}
export default Input