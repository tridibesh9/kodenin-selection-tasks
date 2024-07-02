import { Chart } from "react-google-charts";
import { useState } from "react";
import { useEffect } from "react";

function getExpense(data){
  const datanew = {
    Grocery :0,
    Travel : 0,
    Food:0,
    TechPurchase : 0
  }
  for(var i = 0;i<data.length;i++){
    if(data[i].ExpenseClass === "Grocery"){
      datanew.Grocery+=1
    }
    else if(data[i].ExpenseClass === "Tech Purchase"){
      datanew.TechPurchase+=1
    }
    else if(data[i].ExpenseClass === "Travel"){
      datanew.Travel+=1
    }
    else if(data[i].ExpenseClass === "Food"){
      datanew.Food+=1
    }
  }
  console.log(datanew)
  return ([
    ["Expense Class", "Count"],
    ["Grocery", datanew.Grocery],
    ["Tech Purchase", datanew.TechPurchase],
    ["Travel", datanew.Travel],
    ["Food", datanew.Food]
  ]);
}
  

export default function Graphss(props){
  
    const [data,setData] = useState(props.data)

    useEffect(() =>{
        setData(props.data)
    },[props.data])
     const options = {
        title: props.title
      };
  return (
    <Chart
      data={getExpense(data)}
      chartType={props.chartType}
      options={options}
      width="100%"
      height="400px"
    />
  )
}
