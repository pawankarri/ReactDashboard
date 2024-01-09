import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import TopLeftCard from './pages/TopLeftCard'
import TopRightCard from './pages/TopRightCard'
import SecondRightCard from './pages/SecondRightCard'
import SecondLeftCard from './pages/SecondLeftCard'

export default function DashboardScreen() {
  return (
     <Box sx={{height:"100%",width:"100%" ,}}>

      <Grid container sx={{height:"100%"}}>
        <Grid item xs={2.5} sx={{height:"100%"}}>
          <Box sx={{mr:2,border:"2px solid red",height:"95%"}}>

          </Box>
        </Grid>

        <Grid item xs={9.5}>
          <Box sx={{ml:2,border:"2px solid green",height:"95%",}}>
       {/* top */}
           <Box sx={{height:"200px"}}>
            <Grid container sx={{height:"100%"}}>

          <Grid item  xs={12} md={8} sx={{height:"100%"}}>
            <Box sx={{height:"100%"}} ><TopLeftCard/></Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{height:"100%"}}>
            <Box sx={{height:"100%",}}>
            <TopRightCard/>
            </Box>
          </Grid>
            </Grid>

           </Box>

           {/* top */}

           {/* second */}
          <Box sx={{height:'400px',margin:'5px',scrollbarWidth:'auto'}} >
           <Grid Container sx={{height:"100%"}}>
            <Grid item xs={12} md={8} sx={{height:"100%",scrollbarWidth:'auto'}}>
            <SecondLeftCard/>
            </Grid>
            <Grid item xs={12} md={4} sx={{height:"100%"}}>
            <SecondRightCard/>
            </Grid>
           </Grid>
          </Box>
           {/* second */}

          </Box>
        </Grid>

      </Grid>

     </Box>
  )
}
