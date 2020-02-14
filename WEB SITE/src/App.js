import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home'
import Panier from './Pages/Panier/Panier'
import Admin from './Pages/Admin/admin'
import Order from './Pages/Commandes/Commandes'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//#region MAIN
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      statepanier:
        []

    }
  }
  addProduitToPanier(produit) {
    var panieract = this.state.statepanier;
    console.log(this.state.statepanier)
    panieract.push(produit);
      this.setState({statepanier:panieract})
    console.log(panieract)
  }
  dellProduitToPanier(produit) {
    var currentPanier = this.state.statepanier;
    let indice= Object.keys(currentPanier).find(key => currentPanier[key]._id === produit._id);
    if(indice===-1){
      console.log("rien trouvé");
    }
    else
    {
      currentPanier.splice(indice , 1);
    }
    this.setState({statepanier:currentPanier})
  }

  addproduct(produit)
  {
    var toutproduit=this.state.products;
    toutproduit.push(produit);
    this.setState({products:toutproduit})
    console.log(toutproduit);
  }
  render() {


// Then use it before your routes are set up:
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={() => <Home statepanier={this.state.statepanier} products={this.state.products} addProduitToPanier={(p) => this.addProduitToPanier(p)} ></Home>} />
          <Route exact path='/admin' component={() => <Admin products={this.state.products}addproduct={(p) => this.addproduct(p)}></Admin>} />
          <Route exact path='/panier' component={() => <Panier products={this.state.statepanier}  dellProduitToPanier={(p) => this.dellProduitToPanier(p)} ></Panier>} />
          <Route exact path='/order' component={() => <Order products={this.state.statepanier} ></Order>} />
        </Switch>
      </Router>
    )
  }
  async componentDidMount() {
  
    let response = await fetch(
        "http://localhost:3001/products",
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }
    );
    let json = await response.json();//reponse de votre API
    this.setState({products:json})
  };  
  
}
//#endregion
export default App;
