import React from 'react';
import RegistrationForm from "./component/RegistrationForm";
import {Container, Paper} from "@mui/material";

function App() {

    return (
            <div className="App">
                <Container component="main" maxWidth="sm" sx={{
                    mt: 3,
                }}>
                <Paper elevation={3} sx={{
                    p: 3
                }}>
                    <RegistrationForm />
                </Paper>
                </Container>
            </div>
    );
}

export default App;
