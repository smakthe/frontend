import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const RecordPage = () => {
    const { id } = useParams();
    const [record, setRecord] = useState(null);

    useEffect(() => {
        const fetchRecord = async () => {
            try{
                const response = await axios.get(`/records/${id}`);
                setRecord(response.data);
            }catch(error){
                console.error(error);
            }
        };
        fetchRecord();
    }, [id]);

    return (
        <Box sx={{ mt: 2 }}>
            {record ? (
                <Typography variant="h4">{record.name} : {record.number}</Typography>
            ) : (
                <Typography variant="h6">Loading...</Typography>
            )}
        </Box>
    );
};

export default RecordPage;
