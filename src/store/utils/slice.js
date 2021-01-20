import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShowSearchModal: false
}

export const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    setIsShowSearchModal: (state, action) => {
      state.isShowSearchModal = action.payload.isShowSearchModal
    },
  }
})

export const { setIsShowSearchModal } = utilsSlice.actions

export default utilsSlice.reducer
