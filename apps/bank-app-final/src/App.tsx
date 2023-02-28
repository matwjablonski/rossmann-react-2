import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import User from './components/User/User';
import { UserData } from './data';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import Transactions from './views/Transactions';
import Transaction from './views/Transaction';
import './global.css';
import Container from './components/Container/Container';
import { useRequest } from './hooks/useRequest';

type UserAuthData = {
  user: UserData | null;
  isAuthenticated: boolean;
}

function App() {
  const [authData, setAuthData] = useState<UserAuthData>({
    isAuthenticated: false,
    user: null,
  });

  const { data: user, isLoading } = useRequest<UserData>('user');

  const handleLogin = async (isAuth: boolean) => {
    if (isAuth) {
      setAuthData(({
        user: user,
        isAuthenticated: true,
      }));
    }
  }

  return (
    <main>
      <Header bankName="Bank Roossnę" />
      <Container>
        {authData.isAuthenticated && authData.user && <User 
          name={authData.user.name}
          profession={authData.user.profession}
          imageUrl={authData.user.avatar}
        />}
        {!authData.isAuthenticated && <LoginForm loginAction={handleLogin} />}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<Transactions />} />
          <Route path="/history/:id" element={<Transaction />}/>
        </Routes>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
