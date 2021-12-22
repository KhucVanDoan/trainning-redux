import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { deleteStudent } from '../actions/action';

 const Home =()=> {
   const student=useSelector(state=>state);
   const dispatch=useDispatch()
   const handleClick=(id)=>{
     dispatch(deleteStudent(id));
   }
  return (
      <Container maxWidth="xm" style={{marginTop:'100px'}}>
         <Link to='/add'> <Button variant="outlined" >ADD</Button></Link>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { student.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell><Link to={`/edit/${row.id}`}><Button variant="contained" color="success">Edit</Button></Link>
              <Button variant="contained" color="error" onClick={()=>handleClick(row.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>
    
  );
}
export default Home