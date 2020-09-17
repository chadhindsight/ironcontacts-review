import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  // use hooks for state
  const [actors] = useState(contacts)

  function displayActors(data) {
    return data.map(actor => {
      return <tr>
        <th><img src={`${actor.pictureUrl}`} alt="pretty person" /></th>
        <th>{actor.name}</th>
        <th>{actor.popularity}</th>
      </tr>
    })
  }

  return (
    <div>
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
