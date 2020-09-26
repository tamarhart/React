import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import * as myVar from './Vars';
import Welcome1 from './welcome1';
import Counter from './counter';
import Input from './input';
import TodayTime from './todaysTime';

function App() {
 
  console.log(myVar.f());
  var a='kkkk';
  var bo='true2';
 
  var fruits=["banana","apple","orange"];
  var names=[<li>tammush</li>,<li>mamush</li>];
  var names1=["avraham","itschak","yaakov"];
  var user={fname:"tammi",id:3456,adress:"haifa",lname:"hartman",age:20}
  var keys=Object.keys(user).map((value,index)=><li key={index}>{value} : {user[value]} </li>)
  return (

    <div className="App">
      <header className="App-header">
     
  <TodayTime />
  <Input />
  <Counter />
        <img src={logo} className="App-logo" alt="logo"/>
         <h1><Welcome1 user={user}/></h1>
        <Welcome/>
        {myVar.x+' '+myVar.y}
        <Welcome/>
        {a}
        <br></br>
        {1+1}
        <br></br>

        be good!!!!!
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
        <h1>{fruits.map(fruit=><span>{fruit  } </span>)}</h1>
        <h1>{bo=='true'?<span>you are ok</span>:<span>there is a problem</span>}</h1>
        <p>hi im tammar</p>
        <ul>{names}</ul>
        <ul>{names1.map((name,index)=><li key={index}>{name}</li>)}</ul>
        <ul>{keys}</ul>
      </header>
    </div>
  );
}

export default App;
