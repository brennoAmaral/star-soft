import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactElement } from 'react';

interface IAsideController {
  childrens: ReactElement[];
  isOpen: boolean;
}

const initialState: IAsideController = {
  childrens: [],
  isOpen: false,
};

export const asideReducer = createSlice({
  name: 'aside-controler',
  initialState,
  reducers: {
    setChildrens(state, action: PayloadAction<ReactElement[]>) {
      state.childrens = action.payload;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const asideActions = asideReducer.actions;
export default asideReducer.reducer;
