import "./App.css";
import logoImage from "./assets/images/logo.png";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${logoImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        padding: "180px",
      }}
    >
      Our Services : Web App Development, Mobile App Development, and Project
      Consueling.
      <br />
      <br />
      <i>
        Contact us at :{" "}
        <a href="mailto:28softwaresnp@gmail.com">28softwaresnp@gmail.com</a>
        &nbsp;OR
        <a href="https://www.linkedin.com/company/28softwares/"> LinkedIn us</a>
      </i>
      <br />
      Copyright &copy; {new Date().getFullYear()} | 28Softwares - Lokanthali,
      Bhaktapur
      <hr />
      <h4>Our Recent Projects</h4>
      <ul>
        <li>
          <a href="https://www.investiaa.com">Investiaa</a>
        </li>
        <li>
          <a href="#">UniPlan Mobile App</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
