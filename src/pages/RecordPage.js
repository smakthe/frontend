import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, Button, TextField, CircularProgress } from '@mui/material';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const RecordPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [record, setRecord] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({ name: '', number: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecord = async () => {
            try {
                const response = await axios.get(`/records/${id}`);
                setRecord(response.data);
                setFormData({ name: response.data.name, number: response.data.number });
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch record');
                setLoading(false);
            }
        };
        fetchRecord();
    }, [id]);

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.patch(`/records/${id}`, formData);
            setRecord(response.data);
            setEditing(false);
        } catch (error) {
            setError('Failed to update record');
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/records/${id}`);
            navigate('/');
        } catch (error) {
            setError('Failed to delete record');
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Box sx={{ mt: 2 }}>
            {error && <Typography color="error">{error}</Typography>}
            {editing ? (
                <Box>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Number"
                        name="number"
                        type="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button onClick={handleUpdate} variant="contained" color="primary" sx={{ mt: 2 }}>
                        Save
                    </Button>
                    <Button onClick={handleEditToggle} variant="outlined" color="secondary" sx={{ mt: 2, ml: 2 }}>
                        Cancel
                    </Button>
                </Box>
            ) : (
                <Box>
                    <Typography variant="h4">{record.name} : {record.number}</Typography>
                    <Button onClick={handleEditToggle} variant="contained" color="primary" sx={{ mt: 2 }}>
                        Edit
                    </Button>
                    <Button onClick={handleDelete} variant="contained" color="error" sx={{ mt: 2, ml: 2 }}>
                        Delete
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default RecordPage;
