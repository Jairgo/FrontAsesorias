import React, { useState, useMemo } from 'react';
import HeaderApp from './components/reusables/HeaderApp';
import LoginStack from './components/stacks/LoginStack'
import { UserContext } from './components/UserContext';


export default function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [isLoguedIn, setIsLoguedIn] = useState(false);
  const handlerLoguedIn = (val) => setIsLoguedIn(val);

  return (
    <UserContext.Provider value={value}>
      {
        isLoguedIn ? (
          <HeaderApp asesor={user ? user.asesor : false} userId={user ? user.id : 0} changeView={handlerLoguedIn} />
        ) : (
          <LoginStack changeView={handlerLoguedIn} />
        )
      }
    </UserContext.Provider>
  );
}
