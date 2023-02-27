import React from 'react';
import Header from './components/Header/Header';
import { data } from './data';

function App() {
  return (
    <main>
      <Header welcomeMsg="Witaj w moim banku" />
      {data.transfers.map((transfer) => <p key={transfer.id}>{transfer.name}</p>)}
    </main>
  );
}

export default App;
