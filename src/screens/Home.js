import { useLocation } from "react-router-dom";
import { Box } from '@mui/system';
import { Container, Typography } from "@mui/material";

function Home() {
    const location = useLocation();
    return <Box>
        <Container>
            <Typography variant="body1">First Name: {location.state.FirstName}</Typography>
            <Typography variant="body1">Last Name: {location.state.LastName}</Typography>
            <Typography variant="body1">User Name: {location.state.UserName}</Typography>

        </Container>
    </Box>
}

export default Home;