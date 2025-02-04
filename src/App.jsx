import AddExpenses from "./components/AddExpense";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";
import { useEffect } from "react";
import AddnewExpense from "./components/AddnewExpense";

function App() {
  const [expenseList, setExpense] = useState(() => {
    const storedExpense = JSON.parse(localStorage.getItem('expense'));
    return storedExpense ? (storedExpense) : [];});
  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, settotalExpense] = useState(0);
  const [expensedata,setExpensedata]= useState([])
  const [filters,setfilter]= useState("none");
  const updateTotal = () =>{
    var newTotal = 0
    var newincome = 0
    var newExpense = 0
    var newdata = []
    for (var i = 0;i<expenseList.length;i++){
      if(expenseList[i].expensetype == "income"){
        newTotal+=parseInt(expenseList[i].amount);
        newincome+=parseInt(expenseList[i].amount);
      }
      else{

        newTotal-=parseInt(expenseList[i].amount);
        newExpense+=parseInt(expenseList[i].amount);
        newdata.push(expenseList[i])
      }
    }
    setTotal(newTotal)
    setIncome(newincome);
    settotalExpense(newExpense)
    setExpensedata(newdata)
  }
  const updatefilter = (event) =>{
    const { name, value } = event.target;
    const newfilter = value;
    setfilter(newfilter);
  }
  useEffect(()=>{
    updateTotal();
    localStorage.setItem( 'expense',JSON.stringify(expenseList))
    console.log(localStorage)
  },[expenseList])
  const addList = (inputData) => {
    setExpense([...expenseList, inputData]);
  };
  const deleteExpense = (key)=>{
    let updateExpense = [...expenseList];
    updateExpense.splice(key,1)
    setExpense([...updateExpense])
  }
const updatelist = (key,input)=>{
    let updatedExpense = [...expenseList]
    updatedExpense[key] = input;
    setExpense([...updatedExpense])
}
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard total = {total} income = {income} expense = {expense} datas = {expensedata}/>
      <AddExpenses addList={addList}  />
      <div className="ExpenseList" id="expenseList">
        <div className="heading"> EXPENSE LIST</div>
        <div className="filter">Filter: 
          <select name="ExpenseClass" value={filters} onChange={updatefilter} >
          <option value="none">None</option>
        <option value="Grocery">Grocery</option>
        <option value="Tech Purchase">Tech Purchase</option>
        <option value="Travel">Travel</option>
        <option value="Food">Food</option>
      </select>
      </div>
        <div className="List">
        {(expenseList.filter((item)=>{
          if(filters === "none")
            return item
          else
            return item.ExpenseClass === filters
        })).map((value, i) => (
          <AddnewExpense key={i} index={i} {...value} deleteExpense = {deleteExpense} updatelist = {updatelist}/>
        ))}
      </div>
        <div className="total">Total : <div>{total}</div></div>
      </div>
    </div>
  );
}

export default App;
