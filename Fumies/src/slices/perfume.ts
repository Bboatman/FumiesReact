import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Perfume} from '../common/types/Perfume.type';

export interface PerfumeState {
  value: number;
  perfumes: Perfume[];
}

const initialState: PerfumeState = {
  value: 0,
  perfumes: [],
};

export const perfumeSlice = createSlice({
  name: 'perfume',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = perfumeSlice.actions;

export const perfumeReducer = perfumeSlice.reducer;
