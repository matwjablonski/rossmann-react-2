import React, { ChangeEvent, lazy, Suspense, useState } from 'react';
import Footer from './common/components/Footer/Footer';
import Header from './common/components/Header/Header';
import LoginForm from './user/components/LoginForm/LoginForm';
import User from './user/components/User/User';
import { Routes, Route } from 'react-router-dom';
import './global.css';
import Container from './common/components/Container/Container';
import ProtectedRoute from './common/components/ProtectedRoute/ProtectedRoute';
import { useAuth } from './user/hooks/useAuth';
import { UserContextProvider } from './user/contexts/User.context';
import { DEFAULT_LANG, Lang, LanguageContextProvider } from './common/contexts/Language.context';
import FormField from './common/components/FormField/FormField';

const Home = lazy(() => import('./views/Home'));
const Contact = lazy(() => import('./views/Contact'));
const Transaction = lazy(() => import('./transactions/views/Transaction'));
const Transactions = lazy(() => import('./transactions/views/Transactions'));

function App() {
  const {isLoggedIn, activeUser, loginAction} = useAuth();
  const [ selectedLang, setSelectedLang ] = useState(DEFAULT_LANG);

  return (
    <main>
      <LanguageContextProvider value={selectedLang}>
        <UserContextProvider value={{
          isAuthenticated: isLoggedIn,
          user: activeUser,
        }}>
          <Header bankName="Bank Roossnę" />
          <FormField
            value={selectedLang}
            type='select'
            options={[ 'pl', 'en' ]}
            id="language-selector"
            name="language-selector"
            placeholder="Wybierz język"
            label="Wybierz język"
            handleChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedLang(e.target.value as Lang)}
          />
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
      </LanguageContextProvider>
    </main>
  );
}

export default App;
