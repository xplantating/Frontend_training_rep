import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function MainWrapper(props) {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                Height: '100vh',
                position: 'relative'
            }}
        >
            <Container maxWidth="lg">
                {props.children}
            </Container>
        </Box>
    );
}