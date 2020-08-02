import React from 'react'
import PageTitle from '../../components/PageTitle'
import FormContainer from '../../components/FormContainer'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
//import { KeyboardDatePicker } from '@material-ui/pickers';


 



const CreateTripPage = () =>{

    return <div>
      <PageTitle title={'Criar Viagem'}/>
            <FormContainer>
            <TextField label={'Nome'} />
            <TextField label={'Planeta'} />

          {/*
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          label="Data"
            />*/}

            <TextField label={'Descricao'} />   
            <TextField label={'Duracao em dias'} type={'number'}/> 

            <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
            </FormContainer>
            </div>
    
}

export default CreateTripPage