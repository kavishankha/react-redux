
import {Link} from 'react-router-dom';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import React from 'react';
import ViewName from "./viewName";



const Home = () => {


    return (

        <AppBar sx={{alignItems: "center"}}>
            <Toolbar>
                <Typography variant="h6" style={{marginRight: 10}}>Dashboard</Typography>
                <br/>
                <Button variant="contained" color="primary" style={{marginRight: 10}}>
                    <Link to="/add">Add Name</Link>


                </Button>
                <Button variant="contained" color="secondary" style={{marginRight: 10}}>
                    <Link to="/view">view Name</Link>
                </Button>
            </Toolbar>
            <ViewName/>

        </AppBar>


    );
};

export default Home;
