import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  loading: false,
  error: ""
}

export const CurrentUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    loginStart: (state)=>{
        state.loading = true;
    },
    loginSuccess: (state, action)=>{
        state.loading = false;
        state.currentUser = action.payload
    },
    loginFailed: (state, action)=>{
        state.loading = false;
        state.error = action.payload
    }
  }
    
})

// Action creators are generated for each case reducer function
export const { loginStart, loginSuccess, loginFailed } = CurrentUserSlice.actions
export default CurrentUserSlice.reducer