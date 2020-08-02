import React from 'react'
import PageTitle from '../../components/PageTitle'
import CandidatesList from './CandidatesList'
import {ContentContainer} from './styles'
import TripInfoCard from './TripInfoCard'

const TripDetailPage = () => {

    return(

        <div >
           <PageTitle title={'Detalhe da Viagem'}/>
        <ContentContainer >
           <TripInfoCard/>
           <CandidatesList/>
        </ContentContainer>
        </div>
    )
}

export default TripDetailPage
