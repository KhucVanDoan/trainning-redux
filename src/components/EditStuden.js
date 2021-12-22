import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateStudent } from '../actions/action';
import { useNavigate } from 'react-router-dom';
export default function EditStudent() {
    const student=useSelector(state=>state);
    const dispatch=useDispatch()
    const history=useNavigate();
    const {id}=useParams();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState('');
     const currentStudent=student.find(std=>std.id=== parseInt(id))
    console.log(name);
    console.log(email);
    console.log(age)
    useEffect(()=>{
        setName(currentStudent.name)
        setEmail(currentStudent.email)
        setAge(currentStudent.age)
    },[currentStudent])
    const data={
        id:parseInt(id),
        name,
        email,
        age
    }
    const handleClick=()=>{
        dispatch(updateStudent(data))
        history('/')
    }
    return (
        <Container maxWidth="sm">
            <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Email" variant="standard" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <TextField id="standard-basic" label="Age" variant="standard" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <br/>
            <br/>
           <Button variant="contained" color="success" onClick={handleClick}>EDIT</Button>
           <span><Link to='/'><Button variant="contained" color="error">CANCEL</Button></Link></span>
      </Container>
    )
}
