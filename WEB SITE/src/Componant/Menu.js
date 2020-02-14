import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link
} from 'react-router-dom'
import { IoMdPower  } from "react-icons/io";
import {
  ButtonGroup
} from 'react-bootstrap';

//#region Menu
class Menu extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
      <div className="sticky-top pb-5 mb-5">
        <ButtonGroup aria-label="Basic example" className="navbar navbar-expand-md fixed-top bblack">
          <Link className="btn btn-black text-white" to="/">Home</Link>
          <Link className="btn btn-black text-white" to="/Admin">Admin</Link>
          <Link className="btn btn-black text-white" to="/Panier">Panier</Link>
          <button onClick={() => this.logout()} ><IoMdPower color="red" /></button>
        </ButtonGroup>
      </div>
    )

  };
  logout()
  {
    localStorage.clear()
    window.location.reload();
  }


}


export default Menu;
  //#endregion