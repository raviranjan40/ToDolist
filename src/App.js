import React, {useState} from 'react';
import ToDoLists from "./ToDoList";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const[inputList, setInputList] = useState("");
   const[Items, setItems]=  useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

const ListofItems = () => {
  if(inputList){
  setItems((oldItems) => {
    return [...oldItems, inputList];
   });
  setInputList("");}
  else{
    alert("please Enter Input item")
  }
};
const deleteItems =(id) => {
  console.log("deleted");


setItems((oldItems) => {
  return oldItems.filter((arrElem, index) => {
    return  index !==id;
  });
})
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
  
    {Items.map((itemval, index) => {
     return(
      <ToDoLists
       key={index}
       id={index} 
       text={itemval}
       onSelect={deleteItems}
      
      
      />
    );
    })}
  
        </ol>

      </div>
    </div>
  )
}

export default App
