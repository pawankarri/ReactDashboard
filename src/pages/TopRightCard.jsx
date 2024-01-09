import {  Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomPieChart from './CustomPieChart'

export default function TopRightCard() {
  return (
  
   <Card sx={{height:"100%",m:'5px'}}elevation={1}>
    <Box sx={{display:"flex", justifyContent:'space-between'}}>
        <Box>
      <Typography variant='h6'>Time Spendings</Typography>
      <Typography variant='subtitle1'>Weekly report</Typography>
      <Typography variant='h4' >231h 14m</Typography>
      <Typography variant='subtitle1'>+18.4%</Typography>
        </Box>

        <Box sx={{ml:2}}>
        <CustomPieChart/>
        </Box>
    </Box>
    
  
  
  
    </Card>
   
  )
}
