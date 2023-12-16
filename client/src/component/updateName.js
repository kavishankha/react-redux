import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch} from 'react-redux';
import {updatePost} from "../action/action";
import { useNavigate,  useParams} from 'react-router-dom';



const UpdateName = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const navigate = useNavigate()
    const {id}= useParams();

    const handleAddName = async () => {
        try {
            // Pass the 'name' to the updatePost action and wait for it to complete
            await dispatch(updatePost({ id, name }));
            setName('');
            navigate('/');
        } catch (error) {
            console.error('Error updating name:', error.message);
        }
    };


    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10}}>
            <Typography variant="h6" style={{marginRight: 10}}>Enter Name</Typography>
            <TextField
                label="Name"
                variant="outlined"
                required
                sx={{margin: 1}}
                value={name} onChange={(e) => setName(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={handleAddName}>
                Submit
            </Button>
        </Box>
    );
};

export default UpdateName;
