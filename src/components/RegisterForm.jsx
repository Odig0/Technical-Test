import React from 'react';
import { useForm } from 'react-hook-form';
import {TextField,Button,Typography, MenuItem,Select,FormControl,InputLabel,} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const storedPets = JSON.parse(localStorage.getItem('pets')) || [];
    storedPets.push(data);
    localStorage.setItem('pets', JSON.stringify(storedPets));
    reset();
    navigate('/list');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Registrar</Typography>
        
        <TextField
          {...register('name', { required: "El nombre es obligatorio" })}
          label="Nombre" variant="outlined" fullWidth error={!!errors.name}helperText={errors.name?.message}
        />
        
        <FormControl fullWidth margin="normal">
        <InputLabel>Edad</InputLabel>
        <Select
          {...register('age', { required: 'La edad es obligatoria' })}
          label="Edad"
          defaultValue=""
          error={!!errors.age}
        >
          {[...Array(17).keys()].map((age) => (
            <MenuItem key={age + 1} value={age + 1}>
              {age + 1} año(s)
            </MenuItem>
          ))}
        </Select>
        {errors.age && <Typography color="error">{errors.age.message}</Typography>}
      </FormControl>


        
        <TextField
          {...register('color')}
          label="Color"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Tipo</InputLabel>
          <Select {...register('type')} label="Tipo" defaultValue="">
            <MenuItem value="Gato">Gato</MenuItem>
            <MenuItem value="Perro">Perro</MenuItem>
          </Select>
        </FormControl>
        
        <Button type="submit" variant="contained" color="primary" fullWidth>Registrar</Button>
      </form>

      <Button variant="outlined" color="secondary" onClick={() => navigate('/list')} style={{ marginTop: '20px' }}>
        Ver Lista de Mascotas
      </Button>
    </div>
  );
}

export default RegisterForm;
