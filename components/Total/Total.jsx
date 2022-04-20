import { useState } from 'react';
import './Total.scss';

export default function TotalComponent() {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <div className="total">
      <div>
        <div className="amount">
          <div>
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <p>${tipAmount}</p>
        </div>
        <div className="amount">
          <div>
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <p>${totalAmount}</p>
        </div>
      </div>
      <button className="reset">RESET</button>
    </div>
  );
}
