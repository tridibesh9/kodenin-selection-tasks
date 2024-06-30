import { useEffect, useState } from "react"
export default function Dashboard(props){
    const [summary,setSummary] = useState({
        total:0,
        income:0,
        expense:0
    })
    useEffect(
        ()=>{
            setSummary(props)
        },[props]
    )
    return(
        <div className="Dashboard">
            <div>Total<p>{summary.total}</p></div>
            <div>Income<p>{summary.income}</p></div>
            <div>Expense<p>{summary.expense}</p></div>
        </div>
    )
}