import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sha256 from "sha256";
import {
    Form,
    Button
} from 'react-bootstrap';


class connection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="bred bmid"><h1>EVIL E-MARKET</h1></div>
            <div className="backwhite row justify-content-center bmid">
                    <div>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id="email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" id="password" />
                        </Form.Group>
                        <Button variant="light" type="submit" onClick={() => this.getconnect()}>ENTER</Button>
                    </div>
                </div>
            </div>
        );
    }
    async getconnect() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        console.log(email);
        console.log(password);
        let response = await fetch(
            "http://localhost:3001/auth?email=" + email,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }
        );
        let json = await response.json();//reponse de votre API
        let challenge = json.challenge;
        let responseToLogin = sha256(challenge + password + "isitech")
        response = await fetch(
            "http://localhost:3001/auth",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    challenge: challenge,
                    email: email,
                    response: responseToLogin
                })
            }
        );
        json = await response.json();
        localStorage.setItem("token", json.token);
        window.location.reload();
    }
}
export default connection;
