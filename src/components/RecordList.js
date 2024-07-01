import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const RecordList = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('/records')
            .then(response => setRecords(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <List>
            {records.map(record => (
                <ListItem key={record.id} button component={Link} to={`/records/${record.id}`}>
                    <ListItemText primary={record.name} /><ListItemText primary={record.number} />
                </ListItem>
            ))}
        </List>
    );
};

export default RecordList;
