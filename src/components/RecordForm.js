import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const RecordForm = (onRecordAdded) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post('/record', { name: name, number: number })
            setName('');
            onRecordAdded();
        }catch(error){
            console.error(error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
        </Box>
    );
};

export default RecordForm;
