import React, { useState, useEffect } from 'react';
import './App.css';
import contacts from './contacts.json';
import Header from './components/Header'

function App() {
  // Use hooks for initial state
  const [actors, setActors] = useState([])
  // Need a way to update remaining contacts with second arg
  const [remainingContacts, setRemainingContacts] = useState(contacts)
  console.log(typeof actors, actors)

  // Similar to ComponentDidMount and ComponentDidUpdate
  // Empty arr tells React that your effect doesn't depend on any values from props or state, so it never needs to re-run
  useEffect(() => {
    setActors(contacts.slice(0, 5))
    setRemainingContacts(contacts)
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

  //Logic that adds a random contact
  function randomizeContact(list) {
    // Select random contact and put it to the start of contact list
    let randoNum = Math.floor(Math.random() * remainingContacts.length)
    let randomContact = remainingContacts[randoNum]

    // Pass new array to setActors
    list.unshift(randomContact)
    setActors([...list])

    // Update list of remaining contacts
    let remainingContactsCopy = [...remainingContacts].splice(randoNum, randoNum + 1)
    setRemainingContacts(remainingContactsCopy)
    console.log(randoNum)
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
