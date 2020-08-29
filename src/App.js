import React, {useState} from 'react';
// import ToDoList from "./ToDoLists";

const App = () => {
  const[inputList, setInputList] = useState("");
   const[Items, setItems]=  useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

const ListofItems = () => {
  setItems((oldItems) => {
    return [...oldItems, inputList];
   });
  setInputList("");
};

  return (
    <div className="main_div">
      <div className="center_div">
       <br />
       <h1>ToDoList</h1>
       <br />
       <input type="text" placeholder="Add a Items" 
       value ={inputList}
       onChange={itemEvent}/>
       <button onClick={ListofItems}> + </button>

        <ol>
   {     /*<li>
        {inputList}
        
        </li>*/
  }
  
    {Items.map((itemval) =>{
     return <li>{itemval} </li>
    })}
  
        </ol>

      </div>
    </div>
  )
}

export default App
