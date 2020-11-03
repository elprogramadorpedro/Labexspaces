import React from 'react'
import { Button } from '@material-ui/core';
import { ButtonsContainer, AppContainer } from './styles';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';


const HomePage = () => {
  return <AppContainer>
    <PageTitle title={'LabeX'}/>
    <ButtonsContainer>
      <Link to={'/login'}>
        <Button variant={'outlined'} color={'secondary'}>Área do administrador</Button>
      </Link>
      <Link to={'/inscricao'}>
        <Button variant={'contained'} color={'primary'}>Quero me candidatar!</Button>
      </Link>
    </ButtonsContainer>
  </AppContainer>
}

export default HomePage