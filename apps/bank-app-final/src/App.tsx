import React from 'react';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Transfers from './components/Transfers/Transfers';
import { data } from './data';

function App() {
  return (
    <main>
      <Header welcomeMsg="Witaj w moim banku" />
      <LoginForm />
      <Transfers transfers={data.transfers}/>
    </main>
  );
}

export default App;
