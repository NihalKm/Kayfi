// import logo from './logo.svg';
import './App.css';
import { Stack } from '@mui/material'
import Navbar from './Components/Navbar';
import BannerCarousel from './Components/BannerCarousel';

{/* <img src={logo} className="App-logo" alt="logo" /> */}

function Kayfi() {
  return (
    <div className="App">
      <Stack sx={{
        // background:"red",
        height:"100%"}}>
        <Navbar/>
        <BannerCarousel/>
      </Stack>
    </div>
  );
}

export default Kayfi;
