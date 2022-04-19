import React from 'react';
import HeaderApp from './components/reusables/HeaderApp';
import HomeScreen from './components/screens/HomeScreen';

function App() {
  return (
    <HeaderApp HomeScreen={HomeScreen}/>
  );
}

export default App;