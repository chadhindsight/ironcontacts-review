import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  // use hooks for state
  const [actors] = useState(contacts)

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
