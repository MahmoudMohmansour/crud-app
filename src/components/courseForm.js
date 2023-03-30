import React, { Fragment } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const   CourseForm = (props) => {
  //to push notification
  // notify = (message,type) =>{
  //   if(type==="Error")
  //     toast.error(message)
  //   else if(type==="success")
  //     toast.success(message)

  //     notify("please enter course name","error")
  // };

  


  
  return (
    <Fragment>
       <form onSubmit={props.AddCourse}>
        <input  type="text"  value={props.current} onChange={props.updateCourse}/>
        <button  className='button-41' type='submit'>Add course</button>
      </form>
      {/* <ToastContainer /> */}
    </Fragment>
   
  )
}

export default CourseForm