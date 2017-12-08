"use strict";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import StudentList from './StudentList';
import {connect} from 'react-redux';
import {fetchSelectedCampus, deleteCampusOnServer} from '../store'

class SingleCampus extends Component {

  componentDidMount() {
    this.props.findCampus();
  }

  render () {
    const campus = this.props.selectedCampus;
    // console.log('campus: ', campus);
    // console.log('students: ', this.props.students);
    return (
      <div className="container campus-page">
        <div className="container page-title">
          <img src={campus.imageUrl} />
          <div className="campus-pg-header">
            <h3 className="page-name">{campus.name}</h3>
            <span className="campus-description">{campus.description}</span>
          </div>

        </div>
        <div className='btn-container'>
      <Link to={`/campuses/${campus.id}/edit`}><div className="btn-div"><button className="btn btn-secondary" id="add-student-btn"> EDIT CAMPUS INFO</button></div></Link>
      <div className="btn-div"><button onClick={this.props.handeDelete}className="btn btn-danger" id="delete-student-btn"> DELETE CAMPUS</button></div>
      </div>
        <StudentList students={this.props.students} campus ={this.props.selectedCampus} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    selectedCampus: state.selectedCampus,
    students: state.campusStudents
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    findCampus() {
      const id = ownProps.match.params.campusId;
      dispatch(fetchSelectedCampus(id))
    },
    handeDelete(e) {
      e.preventDefault();
      const id = ownProps.match.params.campusId;
      dispatch(deleteCampusOnServer(id,ownProps.history))
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);

export default SingleCampusContainer;
