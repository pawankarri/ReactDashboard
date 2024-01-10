import { Card } from '@mui/material';
import './App.css';
import DashboardScreen from './pages/DashboardScreen';

function App() {
  return (
    <Card sx={{height:"100dvh",width:"100dvw",overflow:"auto",borderRadius:0,backgroundColor:'#d9dee3'}} elevation={0}>
      <DashboardScreen/>
    </Card>
  );
}

export default App;
