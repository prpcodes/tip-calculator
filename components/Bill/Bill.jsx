import { useState } from 'react';
import './Bill.scss';

export default function BillComponent() {
  const [billAmount, setBillAmount] = useState(0);

  return (
    <div className="bill">
      <h2>Bill</h2>
      <div>
        <input type="number" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} />
      </div>
    </div>
  );
}
