import { Avatar, Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import image11 from '../images/image11.jpg'
import image12 from '../images/image12.jpg'
import image13 from '../images/image13.jpg'
import image14 from '../images/image14.jpg'
export default function SecondRightCard() {
  
 const arr=[
  {image:image11,expert:"MavenAnalytics",designation:"BusinessIntelligence",time:33},
 {image:image12,expert:"ZsazsaMcCleverty",designation:"DigitalMarketing",time:52},
 {image:image13,expert:"NathanWagner",designation:"UI/UXDesign",time:12},
 {image:image14,expert:"EmmaBowen",designation:"ReactNative",time:8},
]

  return (
   <Card sx={{ mt:'10px',ml:'5px',height:'100%'}} elevation={1}>
    <Grid sx={{display:'flex',justifyContent:'space-between',}}>
     <Grid>
      <Typography variant='h6'>Popular Instructors</Typography>
     </Grid>
     <Grid>
      <MoreVertOutlinedIcon/>
     </Grid>
    </Grid>

    <Grid sx={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
     <Grid>
      <Typography variant='subtitle1'>INSTRUCTORS</Typography>
     </Grid>
     <Grid>
     <Typography variant='subtitle1'>COURSES</Typography>
     </Grid>
    </Grid>

   
    
    <Box sx={{marginTop:'10px',marginRight:"20px",marginLeft:"20px"}}>
      {arr.map((item,index)=>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:"center",width:"100%",mt:2}}>
        <Box>
      <Avatar src={item.image}/>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography variant='subtitle1'>{item.expert}</Typography>
        <Typography variant='subtitle2'>{item.designation}</Typography>
      </Box>
      <Box>
        {item.time}
      </Box>
      </Box>
      
      )}
    </Box>

   </Card>
  )
}




{/* <Box>
  {
    arr.map((item,index)=>{

      return(
        <img id={item.id} src={item.image}></img>
      )
    })
  }
</Box> */}