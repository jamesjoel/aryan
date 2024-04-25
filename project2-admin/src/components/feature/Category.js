import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../../util/API_URL'
import {useNavigate} from 'react-router-dom'
import * as YUP from 'yup';


let CategorySchema = YUP.object({
  name : YUP.string().required("Please Insert Your Category")
});


const Category = () => {
  let navigate = useNavigate();
  let cateForm = useFormik({
      validationSchema : CategorySchema,
      initialValues : {
        name : ""
        
      },
      onSubmit : (formdata)=>{
        
        axios.post(`${API_URL}/category`, formdata).then(response=>{
          navigate("/category/list");
        })
      } 
  });

  return (
    <div className="d-xl-flex justify-content-between align-items-start">
              <h2 className="text-dark font-weight-bold mb-2"> Category </h2>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8 offset-md-2'>
                    <form onSubmit={cateForm.handleSubmit}>
                      <div className='my-3'>
                        <label>Category Name</label>
                        <input name='name' onChange={cateForm.handleChange} type='text' className={'form-control ' + (cateForm.errors.name && cateForm.touched.name ? 'is-invalid' : '')} placeholder='Category Name' />
                        {
                          cateForm.errors.name ? <p className='text-danger'>{ cateForm.errors.name }</p> : ''
                        }
                      </div>
                      <br />
                      <button type='submit' className='btn btn-success'>Add</button>
                    </form>
                    </div>
                </div>
              </div>
    </div>
  )
}

export default Category
/*
  1. npm i formik
  2. import useFormik hook
  3. create a var for form then its prop, we set min 2 prop a. initialValues, b. onSubmit
  4. add onSubmit event in form tag 
  5. set name attr in input type
  6. add onChange event in input type
*/