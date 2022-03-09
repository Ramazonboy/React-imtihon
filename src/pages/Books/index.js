import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useEffect,  } from "react";
import {
  setLoading,
  setNewsByCategory,
} from "../../redux/action/booksAction";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer";
import CircularProgress from '@mui/material/CircularProgress';
export default function Books() {
  const params = useParams();


  const { books, loading, error } = useSelector((state) => state.books);
  console.log(loading);
  useEffect(async()=>{
    setLoading(true)
    await setNewsByCategory()
    setLoading(false)
  
  },[])
  console.log(books);
  return (
    <Box>
      {
        loading
        ?<Box sx={{ display: 'flex',alignItems:"center",justifyContent:"center",width:"100%",height:"100vh" }}>
        <CircularProgress />
      </Box>

        :
 
        
<Box>

      <Header />
      <Container maxWidth="xl" sx={{ py: 3 }}>

        
<Grid container spacing={2}>
 { books.map((item)=>{
   return(
     <Grid item xs={12} md={4} xl={3}>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={item.book_image}
        sx={
          {
            height:"450px"
          }
        }
      />
      <CardContent>
        <Typography  sx={{
          minHeight:"60px",
          fontStyle: "normal",
fontWeight: "bold",
fontSize: "20px",
lineHeight: "28px",
color: "#0B0B0B",
        }}>
         {item.title}
        </Typography>
        <Typography  sx={{
          minHeight:"60px",
          fontStyle: "normal",
fontWeight: "bold",
fontSize: "20px",
lineHeight: "28px",
color: "#8F8F8F",
        }}>
         Author:{item.author}
        </Typography>
        <Typography  sx={{
          minHeight:"40px",
          fontStyle: "normal",
fontWeight: "bold",
fontSize: "20px",
lineHeight: "28px",
color: "#8F8F8F",
        }}>
         Price:{item.price}$
        </Typography>
           </CardContent>
      <CardActions sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
      }}>
        <Link href={item.amazon_product_url} target="_blank">
      <Button 
        variant="contained"
        sx={{
          background: "#14668C",
          color:"white",
          borderRadius: "16px"
        }}
        >Buy</Button>
        </Link>
        <Button 
        variant="contained"
        sx={{
          background: "#14668C",
          color:"white",
          borderRadius: "16px"
        }}
        >More</Button>
      </CardActions>
    </Card>       
    </Grid>
        
     )
   })
 }
</Grid>
</Container>
<Footer />
</Box>
}
    </Box>
    );
}