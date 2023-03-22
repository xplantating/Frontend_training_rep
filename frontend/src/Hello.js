import {useState, useEffect} from 'react';
import axios from 'axios';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Container, Alert, Snackbar } from "@mui/material";
import Stack from '@mui/material/Stack';
export default function Hello (props) {
  const [hello, hellos] = useState ([])
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (handler) => {
    if (handler === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(()=>{
    axios
    .get("/api")
    .then(data => {
      hellos(data.data.message);
    })
  }, []);
  
  return (
    <Container>
        <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
    <Stack spacing={2} sx={{ width: '100%' }}>
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
       <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {hello}
          This is a success message!
        </Alert>
      </Snackbar>
      <Alert severity="info">Loading...</Alert>
    </Stack> 
    </Container>
        );
}