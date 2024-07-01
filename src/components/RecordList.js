import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const RecordList = ({ refresh }) => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecords = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get('/records');
                setRecords(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                setError('Error fetching records');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecords();
    }, [refresh]);

    if (loading) {
        return <Typography variant="h6">Loading...</Typography>;
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return (
        <Box sx={{ mt: 2 }}>
            <List>
                {records.length > 0 ? (
                    records.map(record => (
                        <ListItem key={record.id} component={Link} to={`/records/${record._id}`} button>
                            <ListItemText primary={record.name} />  <ListItemText primary={record.number} />
                        </ListItem>
                    ))
                ) : (
                    <Typography variant="h6">No records found</Typography>
                )}
            </List>
        </Box>
    );
};

export default RecordList;