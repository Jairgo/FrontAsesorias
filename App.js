import React, { useState, useMemo } from 'react';
import HeaderApp from './components/reusables/HeaderApp';
import LoginStack from './components/stacks/LoginStack'
import { UserContext } from './components/UserContext';


export default function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [asesor, setAsesor] = useState(false);

  const [isLoguedIn, setIsLoguedIn] = useState(false);
  const handlerLoguedIn = (val) => setIsLoguedIn(val);

  const toggleHandler = () => {
    if (user.asesor) {
      setAsesor(!asesor)
    }
  };

  return (
    <UserContext.Provider value={value}>
      {
        isLoguedIn ? (
          <HeaderApp asesor={asesor} userId={user ? user.id : 0} changeView={handlerLoguedIn} toggleAsesor={toggleHandler} />
        ) : (
          <LoginStack changeView={handlerLoguedIn} />
        )
      }
    </UserContext.Provider>
  );
}
