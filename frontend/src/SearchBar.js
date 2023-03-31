import {films} from "./searchInfo"
import React, {useState} from 'react'
import './App.css'
import { Container } from "@mui/system"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';



export default function SearchBar() {
  console.log(films)
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm)
  const Change = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <Container sx={{mt: 10}}>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <SearchIcon />
  <input
    id="text"
    type="text"
    placeholder="Search"
    value={searchTerm}
    onChange={Change}
    sx={{ width: 600 }}

/>
      </Toolbar>
    </AppBar>
  </Box>
  <tbody>
        {films.filter((film) =>{
          return searchTerm.toLowerCase() === '' ? film : film.name.toLowerCase().includes(searchTerm);
        }).map((film) => (
          <div>
          <Container>
          <Typography>{film.name}</Typography>
          <Typography>{film.year}</Typography>
          <Typography>{film.rating}</Typography>
          </Container>
          </div>
        ))}
        </tbody>
</Container>
  );
        } 


        
 
     


        