import { useState } from 'react';

export default function BillComponent() {
  const [billAmount, setBillAmount] = useState(0);
  return (
    <div className="bill">
      <h2>Bill</h2>
      <input type="number" value={billAmount} onChange={(e) => setBillAmount(e.target.value)} />
    </div>
  );
}
