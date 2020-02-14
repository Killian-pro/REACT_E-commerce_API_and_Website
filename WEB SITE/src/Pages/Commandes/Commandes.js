import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from "jwt-decode";
import {
    Table
} from 'react-bootstrap';
import { rejects } from 'assert';




class Commandes extends React.Component {
    constructor(props) {
        super(props);
    }
    usersid = "";
    render() {
        this.leid = []
        this.leprix = []
        this.ladate = []
        this.indice = 0

        let Total = localStorage.getItem("Total");
        let tokentranslate = jwtDecode(localStorage.getItem("token"));
        let usersid = tokentranslate.id;
        this.props.products.map(produit => {
            this.prixtotal = produit.prix + this.prixtotal;
        })
        this.orderget()
        return (
            <div>
                <div className="bwhite mt-5"><h1>MERCI POUR VOTRE COMMANDE DE {Total} €</h1></div>
                <div className="bmid">
                    <h3 className="bwhite">Other last orders</h3>
                    <Table striped bordered hover variant="dark">
                        {/* tableau non fini  */}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {
                                        console.log("ça marche pas la :-->") +
                                        console.log(this.leid) +
                                        this.leid

                                    }
                                </td>
                                <td>
                                    {
                                        console.log("ça marche pas la :-->") +
                                        console.log(this.ladate) +
                                        this.ladate
                                    }

                                </td>
                                <td>
                                    {
                                        console.log("ça marche pas la :-->") +
                                        console.log(this.leprix) +
                                        this.leprix
                                    } €
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div >
        );
    }
    async orderget() {
        let response = await fetch(
            "http://localhost:3001/commandes/",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }
        );
        let json = await response.json();

        this.indice = json.keys()
        for (const key of this.indice) {
            this.leid.push(json[key]._id)
            this.ladate.push(json[key].date)
            this.leprix.push(json[key].price)
        }

       // console.log(this.leid, this.ladate, this.leprix)
    }

}
export default Commandes;