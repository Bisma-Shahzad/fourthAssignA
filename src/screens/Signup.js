import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Input from '../components/input';
import { useState } from 'react';



function Signup() {
    const [userName, setText] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navi = useNavigate();

    const movetoHome = () => {
        if(userName === "" || firstName === "" || lastName === ""){
            alert("Kindly fill the required information")
        }else{
        navi('/home', {
            state: {'UserName': userName,
        "FirstName": firstName,
        "LastName": lastName,
        },
        });
    }
    };

    return <Box style={{ backgroundColor: 'cadetblue', margin: 0, width: '100%', height: '100%', padding: '78px' }}>
        <Container>
            <Box className="bg-light rounded shadow mx-auto" style={{ width: '400px', height: '500px' }}>
                <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'center', paddingTop: '6px' }}>Sign Up</Typography>
                <Box className="m-3">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>First Name:</Typography>
                    <Input onChange={(e) => setFirstName(e.target.value)} required />
                </Box>
                <Box className="m-3">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>Last Name:</Typography>
                    <Input onChange={(e) => setLastName(e.target.value)}/>
                </Box>
                <Box className="m-3">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>Username:</Typography>
                    <Input onChange={(e) => setText(e.target.value)} />
                </Box>
                <Box className="m-3">
                    <Typography variant='h5' style={{ fontWeight: 'bold', paddingLeft: '2px' }}>Password:</Typography>
                    <Input />
                </Box>
                <Box>
                    <Button variant='contained' onClick={() => movetoHome()} style={{ width: '80%', padding: 5, marginTop: '15px', marginLeft: '40px', textAlign: 'center' }}>Sign Up</Button>
                </Box>

            </Box>
        </Container>
    </Box>
}

export default Signup;