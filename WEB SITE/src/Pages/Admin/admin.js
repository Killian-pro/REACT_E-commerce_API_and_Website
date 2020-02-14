import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../Componant/Menu'
import Connexion from '../../Componant/Connection';
import {
  Form,
} from 'react-bootstrap';



//#region ADMIN
class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      {
        !localStorage.getItem("token") || localStorage.getItem("token")=='undefined' ? <div> <Connexion />  </div> :

      <div className="container">

        <Menu products={this.props.products} />
        <div className="row justify-content-center bmid">
          {
            <div>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control type="text" placeholder="Name" id="name" />
                <Form.Text className="text-muted">
                  Enter the name of product
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="number" min="0" placeholder="Price" id="price" />
              </Form.Group>
              {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
              <button type="submit"  onClick={() => this.ajoutermoi()}>Submit</button>
            </  div>
          }
        </div>
        <button type="button" className="fixed-bottom" onClick={() => this.deleteall()}>DELETE</button>
      </div >
  }</div>
    );


  }
  async ajoutermoi() {
    var nameid = document.getElementById("name").value;
    var priceid = document.getElementById("price").value;
    console.log(nameid);
    if (nameid.length && priceid.length ) {
      let response = await fetch(
        "http://localhost:3001/products",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ prix: priceid, nom: nameid })
        }
      );
      let json = await response.json();//reponse de votre API
      // console.log(json);
      this.props.addproduct(json)
    }
    else
    {
      if(nameid.length===0)
      {
        alert("il n'y a pas de valeur dans le nom")
      }
      if(priceid.length===0)
      {
        alert("il n'y a pas de valeur dans le prix")
      }
    }
  };

  async deleteall() {

    let response = await fetch(
      "http://localhost:3001/products/all/all",
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },

      }
    );
    let json = await response.json();//reponse de votre API
    console.log(json);
    window.location.reload();
  };

}
export default Admin;
  //#endregion
