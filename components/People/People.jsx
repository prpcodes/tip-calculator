import { useState } from 'react';
import './People.scss';

export default function PeopleComponent() {
  const [people, setPeople] = useState(0);
  return (
    <div className="people">
      <h2>Number of People</h2>
      <input className="people-input" type="number" value={people} placeholder="0" onChange={(e) => setPeople(e.target.value)} />
    </div>
  );
}
