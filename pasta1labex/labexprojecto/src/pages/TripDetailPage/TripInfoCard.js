import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TripInfoItem from './TripInfoItem'







const TripInfoCard = () => {

    return(

        <div >
    

    <Card >
      <CardContent>
      <Typography   variant={'h5'} gutterBottom>
          Informacoes da viagem
        </Typography>
        {/*PROPS PARA PASAR INFORMACOES DESDE compornente tripInfoItem.js*/}
        <TripInfoItem  infoName={'Nome'} info={'Viagem para marte'} />
        <TripInfoItem  infoName={'Planeta'} info={'Marte'} />
        <TripInfoItem  infoName={'Data'} info={'01/07/2020'} />
        <TripInfoItem  infoName={'Descricao'} info={'Viagem maneira pra colonizar marte'} />
        <TripInfoItem  infoName={'Duracao em dias'} info={'228'} />
      </CardContent>
    
    </Card>
  

        </div>
    )
}

export default TripInfoCard