import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CandidatesList from './CandidatesList';

const CandidateItem = () =>{
return <ListItem>
<ListItemText
  primary="Canditao 1"
/>
<ListItemSecondaryAction>
  <IconButton edge="end" aria-label="Delete">
    <ThumbUpIcon />
  </IconButton>
  <IconButton edge="end" aria-label="Delete">
    <ThumbDownIcon />
  </IconButton>
</ListItemSecondaryAction>
</ListItem>      
}

export default CandidateItem 
