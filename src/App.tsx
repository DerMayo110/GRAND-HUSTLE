import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Mario from './mario/pages/Mario';
import Mattia from './mattia/pages/Mattia';

function App() {
  return (
    <BrowserRouter>
        <AppBar position="static"> 
            <Toolbar>
                <Button color="inherit" component={Link} to="/mario">Mario</Button>
                <Button color="inherit" component={Link} to="/mattia">Mattia</Button>
            </Toolbar>
        </AppBar>
        <Routes>
            <Route path="/mario" element={<Mario />} />
            <Route path="/mattia" element={<Mattia />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;