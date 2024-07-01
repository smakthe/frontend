import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const RecordList = ({ refresh }) => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('/records')
            .then(response => setRecords(response.data))
            .catch(error => console.error(error));
    }, [refresh]);

    return (
        <Box sx={{ mt: 2 }}>
            <List>
                {records.map(record => (
                    <ListItem key={record.id} component={Link} to={`/records/${record.id}`} button>
                        <ListItemText primary={record.name} /><ListItemText primary={record.number} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default RecordList;
