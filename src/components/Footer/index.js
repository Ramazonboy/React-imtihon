import { Box, Container, Link,  } from "@mui/material";
import Logo from "../../assets/images/Logo.png"
import Algorismic from "../../assets/images/Algorismic.png"
export default function Footer(){
  return(
    <Box sx={{background: "#C4C4C4"}} >
       <Container>
         
         <Box sx={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
        <img src={Logo} alt="" />
        <Link href={"https://www.algorismic.uz/"} target={"_blank"}>
        <img src={Algorismic} alt="" />
          </Link>

        </Box>
         </Container> 

      
    </Box>
  )
}