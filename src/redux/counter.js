import {createSlice} from "@reduxjs/toolkit"; 

let counterSlice = createSlice({
  name: "counter",
  initialState:{
    // initial state can be
    counter: 0,
    myName: "Kunle",
  },
  // in order to mutate the global state, u do follow
  reducers:{
    increment:(state)=>{
      state.counter += 1
    }
  }
})

export default counterSlice.reducer;