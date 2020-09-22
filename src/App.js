import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';
import Header from './components/Header'

function App() {
  // Use hooks for initial state
  const [actors, setActors] = useState(contacts.slice(0, 5))
  const [remainingContacts, setRemaining] = useState(contacts)
  console.log(actors)

  //Logic that shows a random contact
  function randomizeContact() {
    // Select random contact and put it to the start of contact list
    let newActor = Math.round(Math.random() * remainingContacts.length);

    // Pass new array to setActors
    let updatedContacts = [...actors].unshift(newActor)
    setActors(updatedContacts)

    // Update list of remaining contacts
    let remainingContactsCopy = [...remainingContacts]
    setRemaining(remainingContactsCopy.splice(newActor, 1))
    // console.log(`setRemaining: ${remainingContacts}`)
  }

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

  return (
    <div>
      <Header />
      {/* No Need to instantiate randomizeContact */}
      <button onClick={randomizeContact}>Add Random Contact</button>
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
