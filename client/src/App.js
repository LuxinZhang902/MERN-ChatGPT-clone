import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useMemo} from 'react';
import {CssBaseline} from '@mui/material';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import toast, { Toaster } from 'react-hot-toast';
import {themeSettings} from './theme';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Summary from './pages/Summary';

function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>
        <Toaster/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/summary' element={<Summary/>} />

          </Routes>
      </ThemeProvider>
    
    </div>
  );
}

export default App;
