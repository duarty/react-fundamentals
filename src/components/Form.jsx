import { useState } from "react";
import "./form.css";
import "./reset.css";

function Form({ listTransactions, setlistTransactions, total }) {
  const [formValues, setformValues] = useState({});

  const inputChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setlistTransactions([...listTransactions, data]);
  };

  return (
    <div className="content-cotainer">
      <form onSubmit={submit} className="form-cotainer">
        <div className="form-description-div">
          <h3 className="h3-description">Descrição</h3>
          <input
            className="input-field input--field--value"
            placeholder="Digite sua descrição"
            type="text"
            value={formValues.description || ""}
            name="description"
            onChange={inputChange}
          />
          <p className="description-example">Ex: Compra de roupas</p>
        </div>
        <div className="form-price-div">
          <div>
            <h3 className="h3-description">Valor</h3>
            <input
              className="input-field input--field--price"
              placeholder="R$"
              type="text"
              name="value"
              value={formValues.value || ""}
              onChange={inputChange}
            ></input>
          </div>
          <div className="type-div-container">
            <h3 className="h3-description">Tipo de valor</h3>
            <select name="type" className="select--box">
              <option value="entradas">Entrada</option>
              <option value="despesas">Saída</option>
            </select>
          </div>
        </div>
        <div className="button-container">
          <button className="buttons button-insert-value" type="submit">
            Inserir valor
          </button>
        </div>
      </form>
      <span className="total-price-container">
        <div className="info-total-price-container">
          <h3 className="total-value-tittle">Valor total:</h3>
          <p className="total-value">$ {total}</p>
        </div>
        <p className="info">O valor se refere ao saldo</p>
      </span>
    </div>
  );
}

export default Form;
//capturar datos dos campos
// inseri-los no setListedTransactions com spread do transaction setListedTransactions(...transaction, newTransactions)
//
