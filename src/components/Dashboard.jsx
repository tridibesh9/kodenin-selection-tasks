import { useEffect, useState } from "react"
import Graphs from "./Graphss"
import Graphs2 from "./Graphs2"
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
        <div className="Dashboard" id="Dashboards">
            <div className="heading dash">DASHBOARD</div>
            <div id="mychart" >
                <div id="Graph1"><Graphs data = {props.datas} title = "Expense habit by no of Transactions" chartType = "PieChart" /></div>
                <div id="Graph2"><Graphs2 data = {props.datas} title = "Expense habit by no of Amount" chartType = "BarChart" /></div>
            </div>
            <div className="summary">
                <div>Total<p>{summary.total}</p></div>
                <div>Income<p>{summary.income}</p></div>
                <div>Expense<p>{summary.expense}</p></div>
            </div>
        </div>
    )
}