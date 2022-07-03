import React, {useState} from "react";
import { Button, CssBaseline, Container } from '@mui/material';
import { Link } from "react-router-dom";
import Guest from './Guest';
import '../App.css';

const DinnerReservation = () => {

    const [guests, setGuests] = useState([
        { first: '', main: '', desert: '', id: 'A' }
    ]);

    const [letter, setLetter] = useState('B');

    /**
     * Delete the requested guest
     * @param {Object} guest requested guest
     */
    const handleDeleteGuest = (guest) => {
        let newGuests = guests.filter(g => g.id !== guest.id);

        // Check if the new guests list is empty
        if (newGuests.length === 0) {
            setLetter('B');
            newGuests = [{ first: '', main: '', desert: '', id: 'A' }];
        }
        setGuests(newGuests);
    }

    /**
     * Add guest
     */
    const handleAddGuest = () => {
        setGuests(prev =>
            [...prev, { first: '', main: '', desert: '', id: letter }]
        );

        // Get the next letter
        const nextLetter =
            String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
        setLetter(nextLetter);
    }

    /**
     * Update the current guest
     * @param {Object} guest current guest
     * @param {String} object current select
     * @param {String} value value of current select
     */
    const updateGuest = (guest, object, value) => {
        setGuests(current =>
            current.map(obj => {
                if (obj.id === guest.id) {
                    // Check if the current select is first
                    if (object === 'first') {
                        return { ...obj, first: value, main: '', desert: ''};
                    // Check if the current select is main
                    } else if (object === 'main') {
                        return { ...obj, main: value, desert: '' };
                    // Check if the current select is something else (desert)
                    } else {
                        return { ...obj, desert: value };
                    }
                }
                return obj;
            }),
        );
    }

    return (
        <Container>
            <CssBaseline />
            
            <Link to="/">
                <Button
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                    }}
                    variant="outlined"
                >
                    Back
                </Button>
            </Link>

            <div className='guests-div'>
                {guests.map(guest =>
                    <Guest
                        key={guest.id}
                        guest={guest}
                        deleteGuest={handleDeleteGuest}
                        updateGuest={updateGuest}
                    />
                )}
            </div>

            {guests[guests.length -1].desert !== '' &&
                <Button
                    variant="outlined"
                    onClick={handleAddGuest}
                    sx={{ marginLeft: '95px'}}
                >
                    Add Guest
                </Button>
            }
        </Container>
    );
}

export default DinnerReservation;
