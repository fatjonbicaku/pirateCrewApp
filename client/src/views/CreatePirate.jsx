import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PirateForm from '../components/PirateForm';

const CreatePirate = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const newPirate = (pirateData) => {
        axios.post('http://localhost:8000/api/pirates', pirateData)
            .then(res => {
                console.log(res.data);
                navigate('/pirates'); 
            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors);
                } else {
                    setErrors({ general: [{ message: "An unexpected error occurred." }] });
                }
                console.log(err.response.data);
            });
    }

    return (
       
            <PirateForm onSubmit={newPirate} errors={errors} />
      
    )
}

export default CreatePirate;
