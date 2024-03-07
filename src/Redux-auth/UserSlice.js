import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { json } from "react-router-dom";

export const loginUser = createAsyncThunk("login/user", async (credentials) => {
  const response = await fetch('https://api.juaaree.com/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  const data = await response.json();
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null,
    error: null,
    loading: false
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout:(state)=>{
       state.user = null;
       localStorage.removeItem('userData');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
        localStorage.setItem('userData', JSON.stringify(action.payload));
      
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setUser, setError,logout } = authSlice.actions;
export default authSlice.reducer;