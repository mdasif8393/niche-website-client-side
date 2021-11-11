import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const {user} = useAuth();
    const [value, setValue] = useState(5);
    const history = useHistory();


    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.rating= value;
        data.userName= user.displayName;
        
        axios.post('http://localhost:5000/review', data)
        .then(result => {
            if(result.data.acknowledged){
                
                alert('Thank you for your feedback');
                history.push('/');
                reset();
            }
        })
    };
    return (
        <div>
            <Header></Header>
            <div className="mt-5 container">
                <h5>Review our service</h5>
                <Typography component="legend"><small>Rating</small></Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <TextField sx={{width: 3/4}} required label="Write a review about us" variant="filled"   rows={4} {...register("review")} /> <br/> */}

                    <div className="form-floating">
                        <textarea required {...register("review")} className="form-control"  style={{height: '150px', width: '500px'}} id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">Write a review about us</label>
                    </div> <br/>

                    

                    <button className="btn btn-success"type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    );
};

export default Review;