import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const RecordForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const response = await axios.post('/record', { name: name, number: number })
            console.log(response.data);
        }catch(error){
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Record Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            /> 
            <TextField
                label="Record Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">Add Record</Button>
        </form>
    );
};

export default RecordForm;
