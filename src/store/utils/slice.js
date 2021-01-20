import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  isShowModal: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setIsShowModal: (state, action) => {
      state.isShowModal = action.payload.isShowModal
    },
  }
})

export const { setIsShowModal } = pokemonSlice.actions

export default pokemonSlice.reducer
