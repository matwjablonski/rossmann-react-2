import React, { lazy, Suspense } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './user/components/LoginForm/LoginForm';
import User from './user/components/User/User';
import { Routes, Route } from 'react-router-dom';
import './global.css';
import Container from './components/Container/Container';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useAuth } from './user/hooks/useAuth';
import { UserContextProvider } from './user/contexts/User.context';

const Home = lazy(() => import('./views/Home'));
const Contact = lazy(() => import('./views/Contact'));
const Transaction = lazy(() => import('./transactions/views/Transaction'));
const Transactions = lazy(() => import('./transactions/views/Transactions'));

function App() {
  const {isLoggedIn, activeUser, loginAction} = useAuth();

  return (
    <main>
      <UserContextProvider value={{
        isAuthenticated: isLoggedIn,
        user: activeUser,
      }}>
        <Header bankName="Bank Roossnę" />
        <Container>
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
      </UserContextProvider>
    </main>
  );
}

export default App;
