import React, { useState, useEffect } from 'react';
import './App.css';
import contacts from './contacts.json';
import Header from './components/Header'
import SortNameButton from './components/SortNameButton';
import SortPopButton from './components/SortPopButton';

function App() {
  // Use hooks for initial state
  const [actors, setActors] = useState([])
  const [remainingContacts, setRemainingContacts] = useState(contacts)
  console.log(typeof actors, actors)

  // Similar to ComponentDidMount and ComponentDidUpdate
  // Empty arr tells React that your effect doesn't depend on any values from props or state, so it never needs to re-run
  useEffect(() => {
    setActors(contacts.slice(0, 5))
  }, []);

  function displayActors(data) {
    // eslint-disable-next-line array-callback-return
    return data.map((actor, i) => {

      return <tr key={i}>
        <th><img src={`${actor.pictureUrl}`} alt="pretty person" /></th>
        <th>{actor.name}</th>
        <th>{actor.popularity}</th>
        <td><button onClick={() => deleteContact(actor.id)}>Remove</button></td>
      </tr>
    })
  }

  //Logic that adds a random contact
  function randomizeContact() {
    // Select random contact and put it to the start of contact list!
    let randoNum = Math.floor(Math.random() * remainingContacts.length)
    let randomContact = remainingContacts[randoNum]
    actors.unshift(randomContact)
    // Update list of remaining contacts
    let remainingContactsCopy = [...remainingContacts].splice(randoNum, randoNum + 1)
    setRemainingContacts(remainingContactsCopy)
  }

  // Sort contacts by name


  function sortName() {
    console.log('sorted')
    let updatedList = [...actors].sort((a, b) => a.name.localeCompare(b.name))
    setActors(updatedList)
  }

  // Sort by popularity(highest first)
  function sortByPop() {
    console.log('popularity')
    // sort by bigger number in popularity
    let updatedList = [...actors].sort((x, y) => y.popularity - x.popularity)
    setActors(updatedList)
  }

  // Delete a contact from contact list
  function deleteContact(id) {
    let updatedList = [...actors].filter(actor => actor.id !== id)
    setActors(updatedList)

  }

  return (
    <div>
      <Header />
      <button onClick={() => randomizeContact()}>Add Random Contact</button>
      <SortNameButton sortName={sortName} />
      <SortPopButton sortByPop={sortByPop} />
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
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
