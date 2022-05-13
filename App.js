import { SimpleGrid } from 'native-base';
import React, { useState, useMemo, useEffect } from 'react';
import HeaderApp from './components/reusables/HeaderApp';
// import HeaderApp from './components/reusables/HeaderApp';
// import Login from './components/screens/Login';
// import SingUp from './components/screens/SignUp';
// import ForgotPassword from './components/screens/ForgotPassword';
import LoginStack from './components/stacks/LoginStack'
import { UserContext } from './components/UserContext';
import { fakeUser } from "./components/Server";


export default function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [isLoguedIn, setIsLoguedIn] = useState(false);
  const handlerLoguedIn = (val) => setIsLoguedIn(val);

  useEffect(() => {
    async function fetchData() {
      const actualUser = await fakeUser();
      setUser(actualUser)
    }
    fetchData();
  }, [])

  return (
    <UserContext.Provider value={value}>
      {
        isLoguedIn ? (
          <HeaderApp asesor={false} userId={2} changeView={handlerLoguedIn} />
        ) : (
          <LoginStack changeView={handlerLoguedIn} />
        )
      }
      {/* // <SingUp />
    // <ForgotPassword /> */}
    </UserContext.Provider>
  );
}
