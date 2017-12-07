"use strict";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {  } from "../store";

class AddStudent extends Component {



  render () {
    return (<div>
    <form>
    <div className="form-group">
    <label htmlFor="nameI">Name</label>
    <input className="form-control" name="name" id="nameI" placeholder="Name"></input>
    </div>
    </form>
    </div>)
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  // want handle change
  //want handle submit
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);

export default AddStudentContainer;
