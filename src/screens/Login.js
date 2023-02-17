import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Input from '../components/input';


function Login() {
    const movetoSingup = () => {
        alert("You Don't have an account")
        navi('/signup')
        // console.log(e)
    };

    const navi = useNavigate();

    return <Box style={{ backgroundColor: 'cadetblue', margin: 0, width: '100%', height: '100%', padding: '128px' }}>
        <Container>
            <Box className="bg-light rounded shadow mx-auto" style={{ width: '400px', height: '400px' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: '6px' }}>Login</Typography>
                <Box className="m-4">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>Username:</Typography>
                    <Input />
                </Box>
                <Box className="m-4">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>Password:</Typography>
                    <Input />
                </Box>
                <Box>
                    <Button onClick={() => movetoSingup()} variant='contained' style={{ width: '80%', padding: 5, marginTop: '25px', marginLeft: '40px', textAlign: 'center' }}>LOGIN</Button>
                </Box>
                <Box style={{ paddingTop: '15px', textAlign: 'center' }}>
                    <Typography variant='box1' >Don't have an account?</Typography>
                    <Button onClick={() => {
                        navi("/signup");
                    }} >Sign Up</Button>
                </Box>
            </Box>
        </Container>
    </Box>
}

export default Login;