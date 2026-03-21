import { useState } from 'react';
import {Button, Typography, Container}  from '@mui/material';


const Mario = () => {
  const [jahr, setJahr] = useState(2026);
  return (
    <Container>
      {jahr}
    </Container>
  );
};

export default Mario;