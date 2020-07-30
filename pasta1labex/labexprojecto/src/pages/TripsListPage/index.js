import React from 'react'
import PageTitle from '../../components/PageTitle'
import { Link } from 'react-router-dom'
import {TripsListPageContainer} from './styles'
import {Button, ListItem, List, ListItemText} from '@material-ui/core';

const TripsListPage = () =>{

    return(

        <TripsListPageContainer>
        <PageTitle title={'Lista de Viagens'}/>
        <Link to={'/create'}>
        <Button variant={'contained'} color={'primary'} >Criar viagem</Button>
        </Link>

        <List component="nav" aria-label="secondary mailbox folders">
        
        <Link to={'/viagens/detalhe'} >
        <ListItem button>
          <ListItemText primary="Viagen para marte" />
        </ListItem>
       </Link>
       
        <Link to={"viagens/detalhe"} >
        <ListItem button>
          <ListItemText primary="Viagen para a Lua" />
        </ListItem>
        </Link>

        </List>
      
        </TripsListPageContainer>
    )
}

export default TripsListPage