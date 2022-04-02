import { useState } from 'react';

export default function TipComponent() {
  const [tipPercent, setTipPercent] = useState(0);
  return (
    <div className="tip">
      <h2>Select Tip %</h2>
      <button onClick={() => setTipPercent(5)}>5%</button>
      <button onClick={() => setTipPercent(10)}>10%</button>
      <button onClick={() => setTipPercent(15)}>15%</button>
      <button onClick={() => setTipPercent(25)}>25%</button>
      <button onClick={() => setTipPercent(50)}>50%</button>
      <input type="number" value={tipPercent} placeholder="Custom" onChange={(e) => setTipPercent(e.target.value)} />
    </div>
  );
}
