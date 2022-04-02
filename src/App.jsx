import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Bill from '../components/Bill';
import Tip from '../components/Tip';
import People from '../components/People';
import Total from '../components/Total';

function App() {
  return (
    <div className="App">
      <Bill />
      <Tip />
      <People />
      <Total />
    </div>
  );
}

export default App;
