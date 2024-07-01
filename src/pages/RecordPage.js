import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const RecordPage = () => {
    const { id } = useParams();
    const [record, setRecord] = useState(null);

    useEffect(() => {
        axios.get(`/records/${id}`)
            .then(response => setRecord(response.data))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <Container>
            {record ? (
                <>
                    <Typography variant="h4">{record.name}</Typography>
                    <Typography variant="h5">{record.number}</Typography>
                </>
            ) : (
                <Typography variant="h6">Loading...</Typography>
            )}
        </Container>
    );
};

export default RecordPage;
