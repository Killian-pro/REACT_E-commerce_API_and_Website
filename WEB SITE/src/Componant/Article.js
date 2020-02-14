import React from 'react';
import AjouterPanier from '../Pages/Panier/Ajouteraupanier';
import 'bootstrap/dist/css/bootstrap.min.css';



import {
  Card,
} from 'react-bootstrap';


//#region Article
class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
     
      <div className="col-lg-3  mt-4" >

          <Card >
            {/* <Card.Img src={require('../1.jpg')} width="200px" /> */}
            <Card.Body>
              <Card.Title>{this.props.product.prix} €</Card.Title>
              <Card.Text>
                {this.props.product.nom}
              </Card.Text>
            </Card.Body>
            <small className="text-muted">
              {
                (() => {



                  return (<Card.Footer>
                    <small className="text-muted"><AjouterPanier addProduitToPanier={(p) => this.props.addProduitToPanier(this.props.product)} /></small>
                  </Card.Footer>)

                })()
              }</small>

          </Card>
        </div>
    );
  }
}
export default Article;
  //#endregion
