import { createContext } from 'react';
import { UserData } from '../models/User.model';

type UserContextType = {
  isAuthenticated: boolean;
  user: UserData | null;
}

export const UserContext = createContext<UserContextType>({
  isAuthenticated: false,
  user: null,
});

export const UserContextProvider = UserContext.Provider;
