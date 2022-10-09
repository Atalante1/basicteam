import React,{useState} from 'react';
import './App.css';
import data from './data';
import List from './List';

function App() {
  const[people,setPeople]=useState(data);
  return (
    <div className='main'>
      {/* <h2> reminder project setup</h2> */}
      <section className='container'>
        <h3> {people.length} birthdays today</h3>
        <List people={people}></List>
        <button on onClick={() => setPeople([])+
           console.log('you clicked me')}>
          clear all
           </button>
      </section>
    </div>

  );
}

export default App;
