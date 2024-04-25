import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { API_URL } from '../../util/API_URL';
import {useNavigate} from 'react-router-dom'

import * as YUP from 'yup';

let ProductSchema = YUP.object({
  title : YUP.string().required("Insert Product Title"),
  price : YUP.string().required("Insert Product Price"),
  category : YUP.string().required("Select Your Product Category"),
  detail : YUP.string().required("Insert Product Detail"),
  type : YUP.string().required("Select Product Type")
})

const Product = () => {
  let navigate = useNavigate();
  let [allCate, setAllCate] = useState([]);
  useEffect(()=>{
    axios.get(`${API_URL}/category`).then(response=>{
      setAllCate(response.data);
    })
  },[])


  let proFrom = useFormik({
    validationSchema : ProductSchema,
    initialValues : {
      title : "",
      price : "",
      category : "",
      detail : "",
      type : ""
    },
    onSubmit : (formdata)=>{
      
      axios.post(`${API_URL}/product`, formdata).then(response=>{
        //console.log(response.data);
        navigate("/product/list");
      })
    }
  });
  return (
    <>
    <div className="d-xl-flex justify-content-between align-items-start">
              <h2 className="text-dark font-weight-bold mb-2"> Product </h2>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8 offset-md-2'>
                    <form onSubmit={proFrom.handleSubmit}>
                      <div className="my-3">
                        <label>Product Name</label>
                        <input type='text' name='title' onChange={proFrom.handleChange} className={'form-control ' + (proFrom.errors.title && proFrom.touched.title ? 'is-invalid' : '')} placeholder='Product Name' />
                        {
                          proFrom.errors.title && proFrom.touched.title ? <p className='text-danger'>{proFrom.errors.title}</p> : ''
                        }
                      </div>
                      <div className="my-3">
                        <label>Product Price</label>
                        <input type='text' name='price' onChange={proFrom.handleChange} className={'form-control ' + (proFrom.errors.price && proFrom.touched.price ? 'is-invalid' : '')} placeholder='Product Price' />
                        {
                          proFrom.errors.price && proFrom.touched.price ? <p className='text-danger'>{proFrom.errors.price}</p> : ''
                        }
                      </div>
                      <div className="my-3">
                        <label>Product Category</label>
                        <select className={'form-control ' + (proFrom.errors.category && proFrom.touched.category ? 'is-invalid' : '')} name='category' onChange={proFrom.handleChange}>
                          <option>Select Product Category</option>
                          {
                            allCate.map(item=><option key={item._id}>{item.name}</option>)
                          }
                        </select>
                        {
                          proFrom.errors.category && proFrom.touched.category ? <p className='text-danger'>{proFrom.errors.category}</p> : ''
                        }
                      </div>
                      <div className="my-3">
                        <label>Product Detail</label>
                        <textarea name='detail' onChange={proFrom.handleChange} className={'form-control ' + (proFrom.errors.detail && proFrom.touched.detail ? 'is-invalid' : '')} placeholder='Product Detail' ></textarea>
                        {
                          proFrom.errors.detail && proFrom.touched.detail ? <p className='text-danger'>{proFrom.errors.detail}</p> : ''
                        }
                      </div>
                      <div className="my-3">
                        <label>Type</label>
                        <br />
                          <label className='mx-3'>Organic <input type='radio' onChange={proFrom.handleChange} value="Organic" name='type'/> </label>
                          <label className='mx-3'>Fresh <input type='radio' onChange={proFrom.handleChange} value="Fresh" name='type'/> </label>
                          <label className='mx-3'>Salse <input type='radio' onChange={proFrom.handleChange} value="Salse" name='type'/> </label>
                          <label className='mx-3'>Discount <input type='radio' onChange={proFrom.handleChange} value="Discount" name='type'/> </label>
                          <label className='mx-3'>Expired <input type='radio' onChange={proFrom.handleChange} value="Expired" name='type'/> </label>
                          {
                          proFrom.errors.type && proFrom.touched.type ? <p className='text-danger'>{proFrom.errors.type}</p> : ''
                        }
                      </div>
                      <br />
                      <button type='submit' className='btn btn-success'>Add</button>

                      <br />
                      
                    </form>
                  </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Product