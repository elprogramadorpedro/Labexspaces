import React from 'react'
import Typography from '@material-ui/core/Typography';
import {LoginForm} from './styles'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import PageTitle from '../../components/PageTitle'

const LoginPage = () =>{

    return(

        <div >   
           <PageTitle title={'Login'}/>
            <LoginForm>
            <TextField label={'Email'} type={'email'}/>
            <TextField label={'Usario'} type={'password'}/>
            <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
            </LoginForm>
        </div>
    )
}

export default LoginPage