import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Button,
    ButtonToolbar
} from 'react-bootstrap';
//#region Bouton control ADmin (MODIF)
class Modif extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <ButtonToolbar>
                <Button className="btn btn-dark text-white mx-auto mt-2  pl-5 pr-5" variant="primary" size="sm"> DELETE</Button>
                <Button className="btn btn-dark text-white mx-auto mt-2  pl-5 pr-5" variant="primary" size="sm"> UPDATE </Button>
                <Button className="btn btn-dark text-white mx-auto mt-2  pl-5 pr-5" variant="primary" size="sm" onClick={()=>this.ajoutermoi()}> INSERT </Button>
            </ButtonToolbar>



        );

    }
    async ajoutermoi() {
        console.log("test");
        let response = await fetch(
            "http://localhost:3001/products",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application.json"
                },
                body: JSON.stringify({"prix":"10","nom":"w88d"           
                })
            }
        );
        let json = await response.json();//reponse de votre API
        console.log(json);
    };
}
export default Modif;
  //#endregion
