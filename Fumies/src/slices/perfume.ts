import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Perfume} from '../common/types/Perfume.type';
import {RootState} from '../app/store';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';

export interface PerfumeState {
  value: number;
  perfumes: Perfume[];
  selectedPerfume: string | undefined;
}

const initialState: PerfumeState = {
  value: 0,
  perfumes: [],
  selectedPerfume: undefined,
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
    selectPerfume: (state, action: PayloadAction<Perfume | undefined>) => {
      state.selectedPerfume = action.payload?.id;
    },
    putPerfume: (state, action: PayloadAction<Perfume>) => {
      if (action.payload.id === undefined) {
        action.payload.id = nanoid();
        state.perfumes.push(action.payload);
      } else {
        let ind = state.perfumes.findIndex(
          elem => elem.id === action.payload.id,
        );
        if (ind >= 0) {
          state.perfumes[ind] = action.payload;
        } else {
          state.perfumes.push(action.payload);
        }
      }
    },
  },
});

export const selectPerfumes = (state: RootState): Perfume[] =>
  state.perfume.perfumes;

export const selectActivePerfume = (state: RootState): Perfume | undefined => {
  if (state.perfume.selectedPerfume) {
    let ind = state.perfume.perfumes.findIndex(
      (elem: Perfume) => elem.id === state.perfume.selectedPerfume,
    );
    return state.perfume.perfumes[ind];
  } else {
    return undefined;
  }
};

export const {increment, decrement, putPerfume, selectPerfume} =
  perfumeSlice.actions;

export const perfumeReducer = perfumeSlice.reducer;
