import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY =  '5a1905ed5b688da97fa95262364e767b';

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL+url, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });

    // Here, we are directly including the API key in the `params` object sent to the API.

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};



// import axios from 'axios';
// // import dotenv from 'dotenv';
// // dotenv.config();




// const BASE_URL='https://api.themoviedb.org/3';
// const TMDB_TOKEN =  'https://api.themoviedb.org/3/movie/550?api_key=5a1905ed5b688da97fa95262364e767b';



// const headers={
//     Authorization: "bearer" + TMDB_TOKEN,
// };


// export const fetchDataFromApi=async(url,params)=>{
//     try{
//         const {data}=await axios.get(BASE_URL + url,{
//             headers,params
//         })

//         // yaha upr jo {data} aise brackets me h wo destructuring h usse hm pure api ka saman call ni kra rhe bss data ko pick kr rhe h specifically api me se
//         return data;
//     }catch(error){
//         console.log(error);
//         return error;
//     }

// }
