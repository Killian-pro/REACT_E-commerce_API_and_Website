import React from 'react';
import Article from '../../Componant/Articlepanier';
import Menu from '../../Componant/Menu';
import Connexion from '../../Componant/Connection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdCart } from "react-icons/io";
import jwtDecode from "jwt-decode";
import {
  Button
} from 'react-bootstrap';

//#region HOME
class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

  }
  usersid="";
  prixtotal=0;
  render() {
    this.prixtotal=0;
    const dellProduitToPanier = (p) => this.props.dellProduitToPanier(p)
    this.props.products.map(produit => {
      this.prixtotal = produit.prix + this.prixtotal;
    })
    if (!localStorage.getItem("token") || localStorage.getItem("token") == 'undefined') {
    console.log("NoooooooooooooooOOOOOOOOOOOOOOOOOO00000000000000000000OOOOOOOOOOOOOOooooooooo")
    }
    else
    {
      let tokentranslate = jwtDecode(localStorage.getItem("token"));
      this.usersid = tokentranslate.id;
      //console.log(tokentranslate.id);
    }
    localStorage.setItem("Total",this.prixtotal)

    return (
      <div>
        {
          !localStorage.getItem("token") || localStorage.getItem("token") == 'undefined' ? <div> <Connexion />  </div> :
            <div >
              <Menu products={this.props.products} />
              <div className="container">
                {
                  this.props.products.length <= 0 ? "" : <Button variant="danger" className="leeft" onClick={() => this.commandeok()} ><IoMdCart color="white" />   Total Price :  {this.prixtotal} €</Button>
                }
                {/* {
                  this.props.products.length <= 0 ? "" : "Total Price : " + this.prixtotal + "€"
                } */}

                <div className="row">
                  {
                    this.props.products.length <= 0 ?
                      <div className="bwhite bmid"><h1>VOTRE PANIER VIDE</h1></div> :
                      this.props.products.map(function (value, index) {
                        return (
                          <Article product={value} dellProduitToPanier={(p) => dellProduitToPanier(p)} />)
                      })
                  }
                </div>
              </div>
            </div>

        }</div>);

  }
  async commandeok() {

    let response = await fetch(
      "http://localhost:3001/commandes",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json"

        },
        body: JSON.stringify({ price: this.prixtotal, products: this.props.products, users: this.usersid })
      }
    );
    let json = await response.json();//reponse de votre API
    console.log(json);
    window.location.href="http://localhost:3000/Order"
  };



}

export default Home;
  //#endregion