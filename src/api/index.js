import axios from "axios";


export const getNewsByCategory =async () => {
  try { const res=await axios.get("https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key=WiPGRAarDYgOcTx3oF45Awyrf26GnxaT")
    console.log(res.data.results.books);
    return {success:true,data:res.data.results}
  }
  catch (error){
    return { success: false };
  }
};