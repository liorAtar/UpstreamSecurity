import React from "react";
import { CssBaseline, Container } from '@mui/material';
import MenuLight from '../MenuLight.png';
import MenuDark from '../MenuDark.png';

const Home = ({ isDarkTheme}) => {
    return (
        <Container
            style={{
                justifyContent: 'center',
                display: 'flex',
                marginTop: '20px'
            }}
        >
            <CssBaseline />
            <img
                src={isDarkTheme ? MenuDark : MenuLight}
                alt="menu"
                width={400}
                height={500}
            />
        </Container>
    );
}

export default Home;
