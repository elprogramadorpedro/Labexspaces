import React from 'react'
import PageTitle from '../../components/PageTitle'
import FormContainer from '../../components/FormContainer'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const ApplicationPage = () =>{

    return <div >
       <PageTitle title={'Aplicar Para Viagem'}/>
            <FormContainer>
            <TextField label={'Nome do Candidato'} />
            <TextField label={'Idade'} type={'number'}/>
            <TextField label={'Texto de Aplicação'} helperText={'explique porque voce e uma boa pessoa candidata'}/>
            <TextField label={'Profisao'} />   
            
        <FormControl>
        <InputLabel id="select-paises">Países</InputLabel>
        <Select
          labelId="select-paises"
        >
          <MenuItem value={'brasil'}>Brasil</MenuItem>
          <MenuItem value={'argentina'}>Argentina</MenuItem>
          <MenuItem value={'eua'}>Estados Unidos</MenuItem>
        </Select>
      </FormControl>


      <FormControl>
        <InputLabel id="select-viagens">Planetas</InputLabel>
        <Select
        labelId="select-paises"
        >
          <MenuItem value={'1'}>Plutao</MenuItem>
          <MenuItem value={'2'}>Marte</MenuItem>
          <MenuItem value={'3'}>Urano</MenuItem>
        </Select>
      </FormControl>
     
           <Button variant={'contained'} color={'primary'} type={'submit'}>Inscrever-se</Button>
            </FormContainer>
        </div>
   
}

export default ApplicationPage