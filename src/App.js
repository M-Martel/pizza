import './App.css';
import { Link } from "react-router-dom"

const App = () => {

  return (

    <div className="App">
      <div className="Menu">
        <div className="Commande">

          <Link to={`/command`}>
            <img src={process.env.PUBLIC_URL + '/nvcommande.png'} alt="listecommande" />;
          </Link>
          <img src={process.env.PUBLIC_URL + '/suitecommande.png'} alt="suite" />;
          <img src={process.env.PUBLIC_URL + '/panierpaiement.png'} alt="caisse" />;
        </div>
      </div>
    </div>
  );
}

export default App;

