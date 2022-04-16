import { useState } from 'react';
import './App.scss';
import Bill from '../components/Bill/Bill';
import Tip from '../components/Tip/Tip';
import People from '../components/People/People';
import Total from '../components/Total/Total';

function App() {
  return (
    <div className="App">
      <h1>
        S P L I <br /> T T E R
      </h1>
      <section>
        <Bill />
        <Tip />
        <People />
        <Total />
      </section>
    </div>
  );
}

export default App;
