import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineEdit } from "react-icons/md";
export default function Editmodal(props){
     const [edits,setEdits] = useState(props)
     const [buttonState,setbutton] = useState(true)
  
   function updateDetails(event) {
    const { name, value } = event.target;
    console.log(value);
    
    setEdits((prevValue) => {
      if (name === "amount") {
        return {
          amount: value,
          ExpenseClass: prevValue.ExpenseClass,
          Date: prevValue.Date,
        };
      } else if (name === "ExpenseClass") {
        return {
          amount: prevValue.amount,
          ExpenseClass: value,
          Date: prevValue.Date,
        };
      } else if (name === "Date") {
        return {
          amount: prevValue.amount,
          ExpenseClass: prevValue.ExpenseClass,
          Date: value,
        };
      }
    });
  }
  useEffect(()=>{
    if(edits.amount !== "" && edits.ExpenseClass !== "" && edits.Date!=="")
      setbutton(false)
    else
      setbutton(true)
  },[edits])
  useEffect(()=>{
    setEdits(props)
  },[props])
  if(props.editstate){
    return(
        <div className="editmodal">
            <input type="text" placeholder="Amount" name="amount" value={edits.amount} onChange={updateDetails} />
            <label for="ExpenseClass">Choose Type of Expense:</label>
            <select name="ExpenseClass" id="List"  value={edits.ExpenseClass} onChange={updateDetails} >
            <option value="Grocery">Grocery</option>
            <option value="Tech Purchase">Tech Purchase</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            </select>
            <input type="date" name="Date" id=""  value={edits.Date} onChange={updateDetails}/>
            <button type="submit" disabled= {buttonState}  
            onClick={()=>{
              const new_details = {amount:edits.amount,ExpenseClass:edits.ExpenseClass,Date : edits.Date}
              props.updatelist(props.index,new_details)
              props.changeEditstate()
      
            }}><MdOutlineEdit />
            </button>
        </div>
    )
  }
  else  
    return null
}