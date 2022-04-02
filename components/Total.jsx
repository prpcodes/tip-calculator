import { useState } from 'react';

export default function TotalComponent() {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <div className="total">
      <div className="tip-amount">{tipAmount}</div>
      <div className="total-amount">{totalAmount}</div>
      <button className="reset">RESET</button>
    </div>
  );
}
