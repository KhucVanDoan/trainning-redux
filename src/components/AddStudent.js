import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../actions/action';
import { useNavigate } from 'react-router-dom';
export default function AddStudent() {
    const student=useSelector(state=>state);
    const dispatch=useDispatch()
    const history=useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState(''); 
    console.log(name);
    console.log(email);
    console.log(age)
    const data={
        id:student[student.length-1].id+1,
        name,
        email,age
    }
    const handleClick=()=>{
        dispatch(addStudent(data))
        history('/')
    }
    return (
        <Container maxWidth="sm">
            <TextField id="standard-basic" label="Name" variant="standard" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard"onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Age" variant="standard" onChange={(e)=>setAge(e.target.value)}/>
            <br/>
            <br/>
           <Button variant="contained" color="success" onClick={handleClick}>ADD</Button>
           <span><Link to='/'><Button variant="contained" color="error">CANCEL</Button></Link></span>
      </Container>
    )
}
