"use strict";
import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';


const AllCampuses = (props) => {
  const campuses = props.campuses;
  return (
    <div className="container app-container">
      <div className="row" id="all-campuses">
        {campuses.map(campus => {
          return (
            <div className="col-xs-4 thumbnail" key={campus.id}>
              <Link to={`campuses/${campus.id}`} value={campus.id}>
                <img src={campus.imageUrl} />
                <div className="caption">
                  <span>{campus.name}</span>
                </div>
              </Link>
            </div>
          );
        })}
        </div>
        <div className="btn-div"><button className="btn btn-secondary" id="add-campus-btn">+ ADD CAMPUS</button></div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const AllCampusesContainer = connect(mapStateToProps)(AllCampuses);

export default AllCampusesContainer;
