import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
export default function TopLeftCard() {
  return (
   
            <Card sx={{m:'5px',height:"100%"}} elevation={1}>
      <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'flex-start',}}>
<Typography variant='h6' sx={{ml:'10px'}}>Welcome back, Felecia 👋🏻</Typography>
<Typography variant='h6' sx={{ml:'10px'}}>Your progress this week is Awesome. let's keep it up and get a lot of points reward !</Typography>
      </Grid>
      <Grid sx={{display:'flex',justifyContent:'space-evenly',}}>
       <Grid sx={{display:'flex',justifyContent:'flex-start',}}>
        <Grid sx={{display:'flex',alignItems:'center',marginRight:'2px',}}>
         <LaptopChromebookOutlinedIcon fontSize='large' sx={{color:'#696cff !important',backgroundColor:'#e7e7ff !important'}}/>
        </Grid>
        <Grid sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant='h6'>Hours Spent</Typography>
        <Typography variant='h5' sx={{color:'#696cff !important'}}>36H</Typography>
        </Grid>
       </Grid>


       <Grid sx={{display:'flex',justifyContent:'flex-start',}}>
        <Grid sx={{display:'flex',alignItems:'center',marginRight:'2px',}}>
         <LightbulbOutlinedIcon fontSize='large' sx={{color:'#03c3ec !important',backgroundColor:'#d7f5fc !important'}}/>
        </Grid>
        <Grid sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant='h6'>Test Results</Typography>
        <Typography variant='h5' sx={{color:'#03c3ec !important'}}>82%</Typography>
        </Grid>
       </Grid>

       <Grid sx={{display:'flex',justifyContent:'flex-start',}}>
        <Grid sx={{display:'flex',alignItems:'center',marginRight:'2px'}}>
         <CheckCircleOutlineOutlinedIcon fontSize='large' sx={{color:'#ffab00 !important',backgroundColor:'#fff2d6 !important'}} />
        </Grid>
        <Grid sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant='h6'>Course Completed</Typography>
        <Typography variant='h5' sx={{color:'#ffab00 !important'}} >14</Typography>
        </Grid>
       </Grid>

      </Grid>
      </Card>
     
  )
}
