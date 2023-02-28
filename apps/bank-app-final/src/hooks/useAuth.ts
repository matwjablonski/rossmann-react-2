import { useState } from 'react'
import { UserData } from '../data';
import { useRequest } from './useRequest';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState<UserData | null>(null);
  const { data: user } = useRequest<UserData>('user');

  const loginAction = () => {
    setActiveUser(user);
    setIsLoggedIn(true);
  }

  return {
    isLoggedIn,
    activeUser,
    loginAction,
  }
}
