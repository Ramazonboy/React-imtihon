import { Box, Typography } from "@mui/material";
import book from "../../assets/images/book.png"

export default function Section1(){
  return (
    <Box width="100%" height="100vh" sx={{
      backgroundColor:'rgba(0,0,0,0.3)',
      backgroundImage:`url(${book})`,
      backgroundSize:"cover",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
    <Typography sx={{
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "100px",
      lineHeight: "142px",
      textAlign: "center",
      color: "#FFFFFF",
      textShadow:" 0px 7px 7px rgba(0, 0, 0, 0.7)",
      
    }}>
      BookShop - easy buy books online
      </Typography>
    </Box>
  )
}