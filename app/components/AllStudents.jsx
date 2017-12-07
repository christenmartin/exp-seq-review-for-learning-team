"use strict";
import React from "react";
import {Link} from 'react-router-dom';
import StudentList from './StudentList';
import { connect } from 'react-redux';



const AllStudents = (props) => {
  const students = props.students;

  return (
     <div>
      <div className='btn-container'>
      <div className="btn-div"><button className="btn btn-secondary" id="add-student-btn">+ ADD STUDENT</button></div>
      </div>
      <StudentList students={students}/>
     </div>
          )

}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

const AllStudentsContainer = connect(mapStateToProps)(AllStudents);

export default AllStudentsContainer;


// old button:
// <div id="btn-div"><Link to="#" id="add-student-btn" className="btn">+</Link></div>
