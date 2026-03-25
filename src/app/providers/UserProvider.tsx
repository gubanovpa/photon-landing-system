import { createContext, useContext, useMemo, useState } from 'react';
import { STORAGE_KEYS } from '@shared/lib/constants';
import { getStoredValue, removeStoredValue, setStoredValue } from '@shared/lib/storage';
import type { PropsWithChildren } from 'react';
import type { AuthUser, LoginPayload, RegisterPayload } from '@entities/user';

type UserContextValue = {
  isAuthenticated: boolean;
  isReady: boolean;
  user: AuthUser | null;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => void;
};

const UserContext = createContext<UserContextValue | null>(null);

function makeDummyUser(payload: LoginPayload | RegisterPayload): AuthUser {
  return {
    name:
      'name' in payload && payload.name.trim().length > 0
        ? payload.name.trim()
        : payload.email.split('@')[0].replace(/^\w/, (letter) => letter.toUpperCase()),
    email: payload.email.trim().toLowerCase(),
    role: 'member',
  };
}

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<AuthUser | null>(() =>
    getStoredValue<AuthUser | null>(STORAGE_KEYS.user, null),
  );
  const isReady = true;

  const value = useMemo<UserContextValue>(
    () => ({
      isAuthenticated: Boolean(user),
      isReady,
      user,
      login: async (payload) => {
        await new Promise((resolve) => {
          window.setTimeout(resolve, 400);
        });

        const nextUser = makeDummyUser(payload);
        setUser(nextUser);
        setStoredValue(STORAGE_KEYS.user, nextUser);
      },
      register: async (payload) => {
        await new Promise((resolve) => {
          window.setTimeout(resolve, 450);
        });

        const nextUser = makeDummyUser(payload);
        setUser(nextUser);
        setStoredValue(STORAGE_KEYS.user, nextUser);
      },
      logout: () => {
        setUser(null);
        removeStoredValue(STORAGE_KEYS.user);
      },
    }),
    [isReady, user],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }

  return context;
}
