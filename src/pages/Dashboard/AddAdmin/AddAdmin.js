import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../../Shared/Header/Header';
const AddAdmin = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = data =>{
      axios.put(`http://localhost:5000/users/${data.email}`)
      .then(result => {
          if(result.data.acknowledged){
            alert("a admin is successfully added");
            reset();
          }
      })
  };


    
    return (
        <div>
            <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" style={{ width: '50%'}} placeholder="Enter email address" {...register("email")} />

                <input className="btn btn-success" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddAdmin;