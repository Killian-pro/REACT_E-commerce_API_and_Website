import React from 'react';
import Article from '../../Componant/Article';
import Menu from '../../Componant/Menu';
import Connexion from '../../Componant/Connection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosBasket } from "react-icons/io";

//#region HOME
class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

  }
  render() {
    const addProduitToPanier = (p) => this.props.addProduitToPanier(p)
    return (
      <div>
        {
          !localStorage.getItem("token") || localStorage.getItem("token")=='undefined' ? <div> <Connexion />  </div>:

            <div >

              <Menu products={this.props.products} />
              <div className="bwhite"><IoIosBasket color="white" /> X {this.props.statepanier.length} </div>
              <div className="container">
                <div className="row">
                  {

                    this.props.products.map(function (value, index) {
                      return <Article product={value} addProduitToPanier={(p) => addProduitToPanier(p)} />

                    })
                  }
                </div>
              </div>
            </div>

        }
      </div >);
  }
}

export default Home;
  //#endregion