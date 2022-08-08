import './App.css';
import {useState} from 'react'
import Form from './components/Form'
import List from './components/List'
import { useEffect } from 'react';
import logo from './components/images/logo.png'


function App() {

  const [loged, setLoged] = useState(true);

  const [filterTransactions, setFilterTransactions] = useState([]);

  const [filter, setFilter] = useState("todos")

  const [listTransactions, setlistTransactions] = useState([
    { description: "Salário recebido", type: "entradas", value: 2500 },
    { description: "Conta de luz", type: "despesas", value: 150 }
  ])

   /* useEffect de montagem e atualização */
   useEffect(() => {
    //Verificação, caso filtro não esteja selecionado, estado de filtro é limpo
    if(filter === "todos"){
      setFilterTransactions([]);
    } else {
      //filtragem como base no filtro selecionado
      const newFilter = listTransactions.filter(transaction => transaction.type === filter);
      setFilterTransactions(newFilter); //resultado filtrado é setado na lista filtrada
    }
  }, [listTransactions, filter, ]);

  const enterPrice = listTransactions.filter((item) => item.type === "entradas").reduce((total, transaction) => 
      total + Number(transaction.value)
  ,0)
  const outPrice = listTransactions.filter((item) => item.type === "despesas").reduce((total, transaction) => 
    total + Number(transaction.value)
,0)
  const totalPrice = enterPrice - outPrice

  return (
   <>
          {
            loged ? (
            <>
            <div className="App">
             <header>
                        <div className="container-header">
                            <figure>
                              <img src={logo} alt="logo nukenzie"/>
                            </figure>
                            <button className="buttons" onClick={()=> setLoged(false)}>Inicio</button>
                        </div>

                    </header>
              <main className="main-container">
                    
                  
                      <Form listTransactions={listTransactions} setlistTransactions={setlistTransactions} total={totalPrice}/>
                      <List listTransactions={listTransactions} setlistTransactions={setlistTransactions} filter={filter} setFilter={setFilter} filterTransactions={filterTransactions}/>
               </main>
           </div>
              
            </>

            ):
            <div>
                testeHomepage
            </div>
          }
          
       
  </> 
  );
}

export default App;
