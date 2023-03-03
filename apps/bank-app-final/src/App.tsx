import React, { lazy, Suspense } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import User from './components/User/User';
import { Routes, Route } from 'react-router-dom';
import './global.css';
import Container from './components/Container/Container';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useAuth } from './hooks/useAuth';

const Home = lazy(() => import('./views/Home'));
const Contact = lazy(() => import('./views/Contact'));
const Transaction = lazy(() => import('./transactions/views/Transaction'));
const Transactions = lazy(() => import('./transactions/views/Transactions'));

function App() {
  const {isLoggedIn, activeUser, loginAction} = useAuth();

  return (
    <main>
      <Header bankName="Bank Roossnę" />
      <Container>
        {isLoggedIn && activeUser && <User 
          name={activeUser.name}
          profession={activeUser.profession}
          imageUrl={activeUser.avatar}
        />}
        {!isLoggedIn && <LoginForm loginAction={loginAction} />}
        <Suspense fallback={<>Trwa ładowanie strony...</>}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/history" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Transactions />
              </ProtectedRoute>
            } />
            <Route path="/history/:id" element={<Transaction />}/>
          </Routes>
        </Suspense>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
