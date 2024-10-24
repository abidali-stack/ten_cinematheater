import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { call } from "../../utils/api_requests";
import { movies_details, movies_search, movies_upcoming } from "../../utils/api_directory";


export const LoadUpcomingMovies = createAsyncThunk('movies/upcoming',
  async(apiKey)=>{
   const res = await 
   call(endpoint=movies_upcoming+"?api_key="+apiKey,
        method="GET",
        body=null, 
        headers={});
   return res
  } 
)


export const LoadMovieDetails = createAsyncThunk('movies/detail',
  async({apiKey, movieId})=>{
    console.log("movieId"+JSON.stringify(movieId))
   const res = await 
   call(endpoint=movies_details+movieId+"?api_key="+apiKey,
        method="GET",
        body=null, 
        headers={});
   return res
  } 
)


export const LoadMovieSearch = createAsyncThunk('movies/search',
  async({apiKey, query})=>{
    console.log("query "+movies_search+"?query="+encodeURIComponent(query)+"&api_key="+apiKey)
   const res = await 
   call(endpoint=movies_search+"?query="+encodeURIComponent(query)+"&api_key="+apiKey,
        method="GET",
        body=null, 
        headers={});
   return res
  } 
)



export const LoadMovieTrailer = createAsyncThunk('movies/trailer',
  async({apiKey, movieId})=>{
    console.log("movieId"+JSON.stringify(movieId))
   const res = await 
   call(endpoint=movies_details+movieId+"/videos?api_key="+apiKey,
        method="GET",
        body=null, 
        headers={});
   return res
  } 
)




const initialState = {
  loading:false,
  msg:''
};

const homeSlice = createSlice({
   name:'home',
   initialState:initialState,
   reducers:{
   },
   extraReducers: (builder) => {
    const setPending = (state) => {
      state.loading = true;
    };

    const setRejected = (state, action) => {
      state.loading = false;
      state.msg = action.error.message
    };


    builder
      .addCase(LoadUpcomingMovies.fulfilled, (state, action) => {
          state.loading = false;
      })
      .addCase(LoadMovieDetails.fulfilled, (state, action)=>{
        state.loading  =  false;
      })
      .addCase(LoadMovieTrailer.fulfilled, (state, action)=>{
        state.loading  =  false;
      })
      .addCase(LoadMovieSearch.fulfilled, (state, action)=>{
        state.loading  =  false;
      })
      .addCase(LoadMovieSearch.pending, setPending)
      .addCase(LoadMovieSearch.rejected, setRejected)
      .addCase(LoadUpcomingMovies.pending, setPending)
      .addCase(LoadUpcomingMovies.rejected, setRejected)
      .addCase(LoadMovieDetails.pending, setPending)
      .addCase(LoadMovieDetails.rejected, setRejected)
      .addCase(LoadMovieTrailer.pending, setPending)
      .addCase(LoadMovieTrailer.rejected, setRejected)
      


  },
})

export const { resetSchedules } = homeSlice.actions
export default homeSlice.reducer
