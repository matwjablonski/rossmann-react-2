import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Transfers from './components/Transfers/Transfers';
import User from './components/User/User';
import { data } from './data';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isAuth: boolean) => {
    setIsAuthenticated(isAuth);
  }

  return (
    <main>
      <Header welcomeMsg="Witaj w moim banku" />
      {isAuthenticated && <User 
        name={data.user.name}
        profession={data.user.profession}
        imageUrl={data.user.avatar}
      />}
      {!isAuthenticated && <LoginForm loginAction={handleLogin} />}
      <Transfers transfers={data.transfers}/>
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
