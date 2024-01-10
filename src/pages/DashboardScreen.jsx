import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import TopLeftCard from './TopLeftCard'
import TopRightCard from './TopRightCard'
import SecondRightCard from './SecondRightCard'
import SecondLeftCard from './SecondLeftCard'
import DataGridDemo from './DataGridDemo'

export default function DashboardScreen() {
  return (
     <Box sx={{height:"100%",width:"100%" ,}}>

      <Grid container sx={{height:"100%"}}>
        {/* <Grid item xs={2.5} sx={{height:"100%"}}>
          <Box sx={{mr:2,border:"2px solid red",height:"95%"}}>

          </Box>
        </Grid> */}

        <Grid item xs={12}>
          <Box sx={{ml:2,height:"95%",overflow:"auto"}}>
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
          <Box sx={{height:'400px',margin:'5px',}} >
           <Grid Container sx={{height:"100%",display:'flex'}}>
            <Grid item xs={12} md={8} sx={{height:"100%",}}>
            <SecondLeftCard />
            </Grid>
            <Grid item xs={12} md={4} sx={{height:"100%",}}>
            <SecondRightCard/>
            </Grid>
           </Grid>
          </Box>
           {/* second */}



           {/* third */}
           <Box sx={{height:'400px',m:'5px', }}>
            <Grid container sx={{display:'flex',height:'100%'}}>
              <Grid item xs={12} md={4}>
                <SecondRightCard/>
              </Grid>
              <Grid item xs={12} md={4}>
                <SecondRightCard/>
                </Grid>
                <Grid item xs={12} md={4}>
                <SecondRightCard/>
                </Grid>
            </Grid>
           </Box>
           {/* third */}
           {/* fourth */}
           <Box sx={{height:'500px',m:'5px'}} >
            <Grid container>
              <Grid item xs={12} md={12}>
                <DataGridDemo/>
              </Grid>
            </Grid>
           </Box>
           {/* fourth */}

          </Box>
        </Grid>

      </Grid>

     </Box>
  )
}
