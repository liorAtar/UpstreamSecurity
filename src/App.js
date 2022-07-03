import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Switch } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DinnerReservation from './Components/DinnerReservation';
import Home from './Components/Home';
import './App.css';

// Define theme settings
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Router>
        
        <div className='nav-btns'>
          <Switch
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
            checked={isDarkTheme}
            onChange={changeTheme}
          />
        </div>

        <div className='links-div'>
          <Link m={2} to="/">
            Home
          </Link>
          <Link m={2} to="/dinnerResevation">
            Dinner Reservation
          </Link>
        </div>

        <Routes>
          <Route
            path="/"
            element={<Home isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/dinnerResevation"
            element={<DinnerReservation />}
          />
        </Routes>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
