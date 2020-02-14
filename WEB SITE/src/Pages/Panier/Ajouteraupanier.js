import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ButtonToolbar
} from 'react-bootstrap';
//#region  Bouton Ajouter au Panier
class AjouterPanier extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <ButtonToolbar>
         <button className="mx-auto" onClick={(p) => this.props.addProduitToPanier(this.props.products)}>
          Add me!
          </button>
        </ButtonToolbar>
  
      );
    }
  }
  export default AjouterPanier;
  //#endregion
  