import {Box, Button, Divider, Grid, MenuItem, TextField, Typography} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {states} from "../data/states";

function RegistrationForm() {
    const [npiNumber, setNpiNumber] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address1, setAddress1] = useState<string>('');
    const [address2, setAddress2] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [errors, setErrors] = useState<{ [k: string]: boolean }>({});

    const onClickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let formData = {
            npiNumber,
            firstName,
            lastName,
            email,
            address1,
            address2,
            postalCode,
            city,
            state
        }

        console.log(`Submit following data: ${JSON.stringify(formData)}`);
    }

    const renderStateDropdown = () => {
        return (
            <TextField id="state" label="State" value={state || ""} select fullWidth
                       error={errors["state"]}
                       onChange={(e) => {
                           setState(e.target.value.trim())
                           setErrors({...errors, "state": !e.target.value.trim()});
                       }}>
                <MenuItem value="">Select a State</MenuItem>

                {states.map((state) => {
                    return (
                        <MenuItem key={state.abbr} value={state.abbr}>{state.name}</MenuItem>
                    )
                })}
            </TextField>
        )
    }

    const validateInput = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault();

        const val = e.target.value.trim();
        let error: { [k: string]: boolean; } = {};

        if (!val) {
            error[e.target.id] = true;
            setErrors({...errors, ...error});
        }
        else {
            error[e.target.id] = false;
            setErrors({...errors, ...error});
        }
    }

    return (
        <div>

            <Box id="registration" component="form"
                 display="flex"
                 justifyContent="center"
                 sx={{
                     mx: 'auto',
                 }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} textAlign={"center"}>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} textAlign={"center"}>
                        <TextField
                            error={errors["npi"]}
                            name="npi"
                            required
                            fullWidth
                            id="npi"
                            label="NPI Number"
                            onChange={(e) => {
                                validateInput(e);
                                setNpiNumber(e.target.value.trim());
                            }}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            autoComplete="email"
                            name="email"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            onChange={(e) => {
                                validateInput(e);

                                setEmail(e.target.value.trim());
                            }}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            onChange={(e) => {
                                validateInput(e);
                                setFirstName(e.target.value.trim());
                            }}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="family-name"
                            name="lastName"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            onChange={(e) => {
                                validateInput(e);
                                setLastName(e.target.value.trim());
                            }}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} textAlign={"center"}>
                        <Divider>
                            <Typography component="h6" variant="h6">Business Address</Typography>
                        </Divider>
                    </Grid>
                    <Grid item xs={12} sm={12} textAlign={"center"}>
                        <TextField
                            name="address1"
                            required
                            fullWidth
                            id="address1"
                            label="Address Line 1"
                            onChange={(e) => {
                                validateInput(e);
                                setAddress1(e.target.value.trim())
                            }}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} textAlign={"center"}>
                        <TextField
                            name="address2"
                            fullWidth
                            id="address2"
                            label="Address Line 2"
                            onChange={(e) => setAddress2(e.target.value.trim())}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={5} textAlign={"center"}>
                        <TextField
                            name="postalcode"
                            fullWidth
                            id="postalcode"
                            label="Postal Code"
                            onChange={(e) => {
                                validateInput(e);
                                setPostalCode(e.target.value.trim());
                            }}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={7} textAlign={"center"}>
                        <TextField
                            name="city"
                            fullWidth
                            id="city"
                            label="City"
                            onChange={(e) => {
                                validateInput(e);
                                setCity(e.target.value.trim());
                            }}
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} textAlign={"center"}>
                        {renderStateDropdown()}
                    </Grid>
                    <Grid item xs={12} sm={12} textAlign={"center"}>
                        <Button variant={"contained"} onClick={onClickHandle}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default RegistrationForm;