import './css/App.css';
import React from 'react';
// import { ReactComponents as Boneco } from './images/icon-person.svg';

function App() {
  const [bill, setBill] = React.useState(0);
  const [pessoas, setPessoas] = React.useState(0);

  const [tipAmount, setTipAmount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  function handleClick(event) {
    const porcentagem = +event.target.innerText.replace('%', '');
    let tip = (bill * porcentagem) / 100;
    console.log(tip);
    if (pessoas) {
      const amount = tip / pessoas;
      setTipAmount(Math.round(amount));
      const totalDeCadaPessoa = (bill + tip) / pessoas;
      setTotal(Math.round(totalDeCadaPessoa));
    } else {
      const amount = tip / 1;
      setTipAmount(amount);
      const total = bill + tip / 1;
      setTotal(total);
    }
  }

  function handleCustom(event) {
    const porcentagem = +event.target.value;
    let tip = (bill * porcentagem) / 100;
    if (pessoas) {
      const amount = tip / pessoas;
      setTipAmount(Math.round(amount));
      const totalDeCadaPessoa = (bill + tip) / pessoas;
      setTotal(Math.round(totalDeCadaPessoa));
    } else {
      const amount = tip / 1;
      setTipAmount(amount);
      const total = bill + tip / 1;
      setTotal(total);
    }
  }

  function reset() {
    setTotal(0);
    setTipAmount(0);
  }

  return (
    <div className="bg">
      <div className="container">
        <section className="esquerda">
          <p>Bill</p>
          <form>
            <div className="bill">
              <input
                onChange={({ target }) => setBill(+target.value)}
                type="number"
                placeholder="$                         0"
                name="conta"
              />
            </div>
            <p>Number of people</p>
            <div>
              <input
                name="numeroDePessoas"
                type="number"
                placeholder="                          0"
                onChange={({ target }) => setPessoas(+target.value)}
              />
            </div>
          </form>
          <p>Select Tip %</p>
          <div className="buttons">
            <button onClick={handleClick}>5%</button>
            <button onClick={handleClick}>10%</button>
            <button onClick={handleClick}>15%</button>
            <button onClick={handleClick}>25%</button>
            <button onClick={handleClick}>50%</button>
            <input
              name="custom"
              type="number"
              placeholder="Custom"
              onChange={handleCustom}
            />
          </div>
        </section>
        <section>
          <div className="bg-direita">
            <div className="final">
              <p>
                Tip Amount<p>/ person</p>
              </p>
              <span>${tipAmount}</span>
            </div>
            <div className="final">
              <p>
                Total <p>/ person</p>
              </p>
              <span>${total}</span>
            </div>
            <button onClick={reset}>RESET</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
