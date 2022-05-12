import { SimpleGrid } from 'native-base';
import React, { useState } from 'react';
import HeaderApp from './components/reusables/HeaderApp';
// import HeaderApp from './components/reusables/HeaderApp';
// import Login from './components/screens/Login';
// import SingUp from './components/screens/SignUp';
// import ForgotPassword from './components/screens/ForgotPassword';
import Login from './components/screens/Login';


export default function App() {
  const [isLoguedIn, setIsLoguedIn] = useState(true);

  const handlerLoguedIn = (val) => setIsLoguedIn(val);

  return (
    isLoguedIn ? (
      <HeaderApp asesor={false} changeView={handlerLoguedIn}/>
      ) : (
      <Login changeView={handlerLoguedIn}/>
    )
    // <SingUp />
    // <ForgotPassword />
  );
}



