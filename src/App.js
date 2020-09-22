import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';
import Header from './components/Header'

function App() {
  // Use hooks for state
  const [actors] = useState(contacts)

  //Logic that shows a random contact
  function randomizeContact() {
    // Select random contact and put it to the start of contact list
    let newContact = Math.round(Math.random() * actors.length);

    console.log(newContact)
  }

  function displayActors(data) {
    // eslint-disable-next-line array-callback-return
    return data.map((actor, i) => {
      if (i < 5) {
        return <tr key={actor.id}>
          <th><img src={`${actor.pictureUrl}`} alt="pretty person" /></th>
          <th>{actor.name}</th>
          <th>{actor.popularity}</th>
        </tr>
      }
    })
  }

  return (
    <div>
      <Header />
      <button onClick={randomizeContact()}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {displayActors(actors)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
