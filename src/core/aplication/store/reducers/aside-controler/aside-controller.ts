import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';

interface IAsideController {
  children: ReactElement|null;
  isOpen: boolean;
}

const initialState: IAsideController = {
  children: null,
  isOpen: false,
};

export const asideReducer = createSlice({
  name: 'aside-controler',
  initialState,
  reducers: {
    setChildren(state, action: PayloadAction<ReactElement>) {
      state.children = action.payload;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const asideActions = asideReducer.actions;
export default asideReducer.reducer;
