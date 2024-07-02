import NavElement from "./NavElement";
export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="#hero"><NavElement className="Navbar" name="Home" id="1" /></a>
      <a href="#Dashboards"><NavElement className="Navbar" name="Dashboard" id="2" /></a>
      <a href="#addExpense"><NavElement className="Navbar" name="Add Expense" id="3" /></a>
      <a href="#expenseList"><NavElement className="Navbar" name="Expense List" id="4" /></a>
    </div>
  );
}
