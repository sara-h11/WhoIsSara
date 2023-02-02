import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'

interface themeColorState{
   value : string 
}
const initialState: themeColorState = {
    value:  'dark',
  }

export const themeColorSlice = createSlice({
  name: 'themeColor',
  initialState,
  reducers: {
    toggle: (state) => {
        if(state.value === 'dark'){
            state.value ='light'
        }else{
            state.value = 'dark'
        }
    },
  }
})

// Action creators are generated for each case reducer function
export const {toggle } = themeColorSlice.actions
export const themeColorValue = (state : RootState) => state.themeColor.value;
export default themeColorSlice.reducer