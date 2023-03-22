import {films} from "./searchInfo"
import React, {useState} from 'react'
import './App.css'
import { Container } from "@mui/system"
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



export default function SearchBar() {
  console.log(films)
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm)
  const handleChange = (event) => {
  setSearchTerm(event.target.value);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            onChange={handleChange}
            type="text"
            value={searchTerm}
            sx={{ width: 600 }}
          />
        </Search>
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






        