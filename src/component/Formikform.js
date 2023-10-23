import React from 'react'
import { useFormik } from 'formik'
import *  as yup from "yup"
// handling form with formik and yup
const Formikform = () => {
  var formik = useFormik({
    initialValues:{
      firstname: "",
      lastname: "",
      email:"",
      password: ""
    },
    onSubmit:(value)=>{
      console.log(value);
    },
    // validate:(values)=>{
    //   let errors = {}
    //   if(values.firstname === ''){
    //     errors.firstname = "this field require"
    //   }else if(values.firstname.length < 5){
    //     errors.firstname = "must not less than 5 character" 
    //   }
    //   if(values.lastname === ''){
    //     errors.lastname = "this field require"
    //   }else if(values.lastname.length < 5){
    //     errors.lastname = "must not less than 5 character" 
    //   }
    //   if(values.email === ''){
    //     errors.email = "this field require"
    //   }else if(values.email.length < 5){
    //     errors.email = "must not less than 5 character" 
    //   }
    //   if(values.password === ''){
    //     errors.password = "this field require"
    //   }else if(values.password.length < 5){
    //     errors.password = "must not less than 5 character" 
    //   }
    //   return errors 
    // }
    validationSchema:yup.object({
      firstname:yup.string().required("this field is required").min(5, "must not less than 5 character"),
      lastname:yup.string().required("this field is required").min(5, "must not less than 5 character"),
      email:yup.string().email("must be an email"),
      password:yup.string().required("this field is required").min(5, "must not less than 5 character")
    })
  })
  console.log(formik.touched);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 shadow-sm mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <h1>sign up here</h1>
              <input className={formik.touched.firstname&&formik.errors.firstname ? 'my-2 is-invalid form-control': 'my-2 form-control'} type="text" placeholder='Firstname' onChange={formik.handleChange} onBlur={formik.handleBlur} name='firstname'/>
              {formik.touched.firstname&&<small className='text-danger'>{formik.errors.firstname}</small>}
              <input className={formik.touched.lastname&&formik.errors.lastname ? 'my-2 is-invalid form-control': 'my-2 form-control'} type="text" placeholder='Lastname'  onChange={formik.handleChange} onBlur={formik.handleBlur} name='lastname'/>
              {formik.touched.lastname&&<small className='text-danger'>{formik.errors.lastname}</small>}
              <input className={formik.touched.email&&formik.errors.email ? 'my-2 is-invalid form-control': 'my-2 form-control'} type="text" placeholder='Email'  onChange={formik.handleChange} onBlur={formik.handleBlur} name='email'/>
              {formik.touched.email&&<small className='text-danger'>{formik.errors.email}</small>}
              <input className={formik.touched.password&&formik.errors.password ? 'my-2 is-invalid form-control': 'my-2 form-control'} type="text" placeholder='Password'  onChange={formik.handleChange} onBlur={formik.handleBlur} name='password'/>
              {formik.touched.password&&<small className='text-danger'>{formik.errors.password}</small>}
              <button type='submit' className='w-100 btn btn-md btn-success'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Formikform