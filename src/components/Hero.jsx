import logo from "./Sources/logo.png"
export default function Hero() {
  return (
    <div className="Hero" id="hero">
      
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="Herotext">Finance Manager</div>
    </div>
  );
}
