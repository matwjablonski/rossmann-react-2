import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import Transfers from './components/Transfers/Transfers';
import User from './components/User/User';
import { data, UserData } from './data';

type UserAuthData = {
  user: UserData | null;
  isAuthenticated: boolean;
}

function App() {
  const [authData, setAuthData] = useState<UserAuthData>({
    isAuthenticated: false,
    user: null,
  });

  const fetchUser = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/user');
      const { data }: { data: UserData } = await response.json();

      setAuthData({
        isAuthenticated: false,
        user: data,
      })
    } catch {}
  }

  const handleLogin = async (isAuth: boolean) => {
    if (isAuth) {
      await fetchUser();
      setAuthData({
        ...authData,
        isAuthenticated: true,
      });
    }
  }

  return (
    <main>
      <Header welcomeMsg="Witaj w moim banku" />
      {authData.isAuthenticated && <User 
        name={data.user.name}
        profession={data.user.profession}
        imageUrl={data.user.avatar}
      />}
      {!authData.isAuthenticated && <LoginForm loginAction={handleLogin} />}
      <Transfers transfers={data.transfers}/>
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
