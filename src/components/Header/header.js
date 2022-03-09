import { Box, Container } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Logo from "../../assets/images/Logo.png"
import SearchIcon from '@mui/icons-material/Search';
import Section1 from "../Sect1";
import Footer from "../Footer";
import axios from "axios"
import { useEffect } from "react";

export default function Header(){

  return(
    <Box >
      <Container sx={{my:2}}>
        <Box sx={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
        <img src={Logo} alt="" />
        <FormControl sx={{  }} variant="outlined">
          <OutlinedInput
            endAdornment={<InputAdornment position="end">
              <SearchIcon/>
              </InputAdornment>}
           />
        </FormControl>
        </Box>

      </Container>
      <Section1 />
    </Box>
  )
}