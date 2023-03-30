import React, { Component } from 'react';
import CourseForm from './components/courseForm'
import CourseList from './components/courseList'


class App extends Component{
  state={
    courses:[
      {name:"HTML"},
      {name:"CSS"},
      {name:"javaSCRIPT"}
    ],
    current:''
  }


  //Update course
   updateCourse=(e)=>{
    this.setState({
      current:e.target.value
    })
  }

  //Add course

  AddCourse=(e)=>{
    e.preventDefault()
    let current=this.state.current;
    let courses= this.state.courses;
    courses.push({name:current});
    this.setState({
      courses,
      current:''
    })
  }


  //deletecourse
  deleteCourse=(index)=>{
    let courses=this.state.courses;
    courses.splice(index , 1)
    this.setState({
      courses
    })
  }


  // edit course
  editCourse=(index,value)=>{
    let courses=this.state.courses;
    let course=courses[index];
    course['name']=value;
    this.setState({
      courses
    })
  }

 
 
  render(){
    const {courses}=this.state;
    const courselist=courses.map((course , index)=>{
      return <CourseList details={course} key={index} deleteCourse={this.deleteCourse} index={index}  editCourse={this.editCourse}/>
    })
    return (
      <section className="App">
        <h2>React CRUD APP</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} AddCourse={this.AddCourse}  />
        <ul>
          {courselist}
        </ul>
        
      </section>
    );
  }
}

export default App;
