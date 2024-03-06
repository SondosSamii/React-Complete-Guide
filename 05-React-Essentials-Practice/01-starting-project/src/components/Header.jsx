import HeaderImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  const header = "Investment Calculator";

  return (
    <header id="header">
      <img src={HeaderImg} alt={header} />
      <h1>{header}</h1>
    </header>
  );
}
