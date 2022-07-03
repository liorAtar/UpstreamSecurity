import React from "react";
import {
    Button,
    CssBaseline,
    Container,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography
} from '@mui/material';
import '../App.css';

const Guest = ({ guest, deleteGuest, updateGuest}) => {

    return (
        <Container>
            <CssBaseline />

            <div className='one-guest-div'>
                <Typography>Guest {guest.id}</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>First</InputLabel>
                    <Select
                        value={guest.first}
                        label="First"
                        onChange={(e) => {
                            updateGuest(guest, 'first', e.target.value);
                        }}
                    >
                        <MenuItem value={'Soup'}>Soup</MenuItem>
                        <MenuItem value={'Salad'}>Salad</MenuItem>
                        <MenuItem value={'Bread'}>Bread</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={guest.first !== '' ?
                    {
                        visibility: 'visible',
                        m: 1,
                        minWidth: 120
                    } : {
                        visibility: 'hidden',
                    }}
                >
                    <InputLabel>Main</InputLabel>
                    <Select
                        value={guest.main}
                        label="Main"
                        onChange={(e) => {
                            updateGuest(guest, 'main', e.target.value);
                        }}
                    >
                        <MenuItem value={'Steak'}>Steak</MenuItem>
                        <MenuItem value={'Chicken'}>Chicken</MenuItem>
                        <MenuItem value={'Fish'}>Fish</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={guest.main !== '' ?
                    {
                        visibility: 'visible',
                        m: 1,
                        minWidth: 120
                    } :
                    {
                        visibility: 'hidden',
                    }}
                >
                    <InputLabel>Desert</InputLabel>
                    <Select
                        value={guest.desert}
                        label="Desert"
                        onChange={(e) => {
                            updateGuest(guest, 'desert', e.target.value);
                        }}
                    >
                        <MenuItem value={'Malaby'}>Malaby</MenuItem>
                        <MenuItem value={'Ice Cream'}>Ice Cream</MenuItem>
                        <MenuItem value={'Apples'}>Apples</MenuItem>
                    </Select>
                </FormControl>
                {guest.desert !== '' &&
                    <Button
                        variant="outlined"
                        onClick={() => {
                            deleteGuest(guest);
                        }}
                    >
                        Delete Guest
                    </Button>
                }
            </div>
        </Container>
    );
}

export default Guest;
