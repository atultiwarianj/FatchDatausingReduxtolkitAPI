import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//Action through fetch api
// export const fetchToDo = createAsyncThunk("fetchToDos", async () => {
//   const response = await fetch("https://cat-fact.herokuapp.com/facts/");
//   return response.json()
// })

//Action through Axios api
export const fetchToDo = createAsyncThunk("fetchToDos", async()=>{
  const response = await axios("https://cat-fact.herokuapp.com/facts/");
  return response.data
})

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchToDo.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchToDo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    builder.addCase(fetchToDo.rejected, (state, action) => {
      console.log("Error", action.payload)
      state.isError = true
    })
  }

})

export default todoSlice.reducer;