import './list.css'
import { FaTrash } from 'react-icons/fa'

function List({listTransactions, setFilter, filterTransactions, setlistTransactions}){

    
    const deleteItem = (item) => {
        const deletedItem = listTransactions.filter(transaction => transaction !== item)
        setlistTransactions(deletedItem)
    }


    return(
        <div className="render-container">
            <div className="render-header">
                <h3>Resumo financeiro</h3>
                <div className="header-buttons-container">
                    <button className="header-render-button --button-todos" onClick={()=> {setFilter("todos")}} name="todos" value="todos">Todos</button>
                    <button className="header-render-button --button-entradas"  onClick={()=> {setFilter("entradas")}} name="entradas" value="entradas">Entradas</button>
                    <button className="header-render-button --button-saidas"  onClick={()=> {setFilter("despesas")}} name="despesas" value="despesas">Despesas</button>
                </div>
            </div>
            <ul className="list-container">
                {
                    (filterTransactions.length > 0 ? filterTransactions : listTransactions).map((item, index) => 

                    <li  className={item.type === "entradas" ? "item-container--green" :  "item-container--red"} key={index}>

                        <span className="item-top-info">
                            <h3 className="desc-item">{item.description}</h3>
                            <p className="price-item-list">R$ {item.value}</p>

                            <button className='trash-icon' onClick={()=> deleteItem(item)}><FaTrash /></button>

                        </span>
                        < p className="type-item">{item.type}</p>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export default List


