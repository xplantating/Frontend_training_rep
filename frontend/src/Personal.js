import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './App.css';

export default function Personal(props) {
    return (
      <>
      <Container sx={{mt: 15}}>
        <CardContent sx={{ml: 15}}>
      <img src='personalphoto.jpeg' alt='personalphoto' className="personalphoto"/>
      <Typography variant='h1' color='black'>
        My name is Andrew
      </Typography>
      <Link href="https://github.com/xplantating" target='blank' underline='none' color='red' sx={{fontSize: 39, ml: 30}}>
       Its my GitHub
      </Link>
      </CardContent>
      </Container>
    </>
        )
      }
      