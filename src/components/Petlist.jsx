import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
    setPets(storedPets);
  }, []);

  const getPetImage = (type) => {
    return type === 'Gato' ? '../assets/cat2.png' : '../assets/dog.webp';
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Listado</Typography>
      
      {pets.map((pet, index) => (
        <Card key={index} variant="outlined" style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
          <Avatar alt={pet.type} src={getPetImage(pet.type)} style={{ margin: '10px' }} />
          <CardContent style={{ textAlign: 'left' }}>
            <Typography variant="h6">{pet.type}</Typography>
            <Typography variant="h5">{pet.name}</Typography>
            <Typography variant="body2">{pet.age} año(s)</Typography>
            <Typography variant="body2">{pet.color}</Typography>
          </CardContent>
        </Card>
      ))}
      
      <Link to="/" style={{ textDecoration: 'none', position: 'fixed', bottom: '20px', right: '20px' }}>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Link>
    </div>
  );
}

export default PetList;
