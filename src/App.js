import React from 'react';
import {  BrowserRouter as Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

import './App.css';

function App() {
  return (
    <Box width={"400px"} sx={{ width: { xl: '1488px' } }} m="auto">
     <Navbar />
     {/* <Home />
     <ExerciseDetail /> */}
       <Routes>
        <Route exact to="/" component={Home} ></Route>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer /> 
      </Box>

/* <>
  <Navbar />
  <Home />
  <ExerciseDetail />
</> */

  );
}

export default App;
