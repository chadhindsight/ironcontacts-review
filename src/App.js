import React, { useState, useEffect } from 'react';
import './App.css';
import contacts from './contacts.json';
import Header from './components/Header'

function App() {
  // Use hooks for initial state
  const [actors, setActors] = useState([])
  const [remainingContacts] = useState(contacts)
  console.log(typeof actors, actors)


  useEffect(() => {
    setActors(contacts.slice(0, 5))
  }, []);

  function displayActors(data) {
    // eslint-disable-next-line array-callback-return
    return data.map((actor, i) => {

      return <tr key={actor.id}>
        <th><img src={`${actor.pictureUrl}`} alt="pretty person" /></th>
        <th>{actor.name}</th>
        <th>{actor.popularity}</th>
      </tr>
    })
  }

  //Logic that shows a random contact
  function randomizeContact(ass) {
    // Select random contact and put it to the start of contact list

    let randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]

    // Pass new array to setActors
    ass.unshift(randomContact)
    setActors([...ass])
    // Update list of remaining contacts

  }

  return (
    <div>
      <Header />
      <button onClick={() => randomizeContact(remainingContacts)}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {displayActors(actors.slice(0, 5))}

        </tbody>
      </table>
    </div>
  );
}

export default App;
