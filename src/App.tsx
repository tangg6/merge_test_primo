import React from 'react';
import { merge } from './utils/merge';

function App() {
  const collection1 = [1, 3, 5, 7];
  const collection2 = [2, 4, 6, 8];
  const mergedCollection = merge(collection1, collection2);

  return (
    <div>
      <h1>Merged Collection:</h1>
      <p>{mergedCollection.join(', ')}</p>
    </div>
  );
}

export default App;
