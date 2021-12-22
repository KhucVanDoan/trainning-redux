import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AddStudent() {
    return (
        <Container maxWidth="sm">
            <TextField id="standard-basic" label="Name" variant="standard"/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" />
            <br/>
            <TextField id="standard-basic" label="Age" variant="standard" />
            <br/>
            <br/>
           <Button variant="contained" color="success">ADD</Button>
           <span><Link to='/'><Button variant="contained" color="error">CANCEL</Button></Link></span>
      </Container>
    )
}
