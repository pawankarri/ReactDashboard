import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import HorizontalBars from './HorizontalBars';

export default function SecondLeftCard() {
  return (
   <Card sx={{marginTop:'10px', height:'100%',mr:'5px'}} elevation={1}>
   <Grid sx={{display:'flex' ,justifyContent:'space-between'}}>
    <Grid >
    <Typography variant='h6'>Topic you are interested in</Typography>
    </Grid>
    <Grid sx={{marginRight:'10px',mt:'5px'}}> <MoreVertOutlinedIcon/></Grid>
   
    
   </Grid>
<HorizontalBars/>
    </Card>
  )
}
