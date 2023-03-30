import React,{Component, Fragment} from 'react'

class CourseList extends Component{

    state={
        isEdit:false
    }
    //render course item
    renderCourse=()=>{
        return(
            <li>
             <span>{this.props.details.name}</span>
             <button  className='button-51' onClick={()=>{this.toggleState()}}>Edit Course</button>
             <button className='button-52'  onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            
            </li>
        )
    }

    //toggle state
    toggleState=()=>{
        let {isEdit}=this.state;
        this.setState({
            isEdit :!isEdit
        })
    }


    updateCourseItem=(e)=>{
        e.preventDefault();
        this.props.editCourse(this.props.index ,this.input.value )
        this.toggleState();
    }
    //render update form
    renderUpdateForm=()=>{
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.details.name}/>
                <button className='button-41' >Update Course</button>
            </form>
        )
    }


    render(){
        let {isEdit} = this.state;
        return(
            
            <Fragment>
               {isEdit?this.renderUpdateForm():  this.renderCourse()} 
            </Fragment>
           
        )
    }
}


export default CourseList