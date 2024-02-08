import React, { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  // State to hold the list of puppies
  const [puppies, setPuppies] = useState(puppyList);

  // State to hold the ID of the featured puppy
  const [featPupId, setFeatPupId] = useState(null);

  // Find the featured puppy based on the featPupId
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  // Function to handle clicking on a puppy name
  const handleClick = (id) => {
    setFeatPupId(id);
  };

  return (
    <div className="App">
      {/* Map over puppies and display their names */}
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}

      {/* Conditionally render the featured puppy's details */}
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            {/* Render other properties as needed */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
