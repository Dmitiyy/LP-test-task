import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ReactComponent as First } from './images/first.svg';
import { mockRows, TRows } from './mockData';

const state = {
  commodities: mockRows
} as { commodities: TRows[] };

export const commoditiesSlice = createSlice({
  name: 'commodities',
  initialState: state,
  reducers: {
    delete(state, action: PayloadAction<any>) {
      const copy = state.commodities.filter(item => item.id !== action.payload.id);
      state.commodities = copy;
    },
    add(state, action: PayloadAction<any>) {
      const item = {
        commodity: 'хххх-',
        id: '',
        icon: First,
        name: '',
        highlighted: false,
        blocked: false
      } as any;
      state.commodities.unshift(item);
    },
    highlightItem(state, action: PayloadAction<any>) {
      const index = state.commodities.findIndex(item => item.id === action.payload.id);
      state.commodities[index].highlighted = action.payload.value;
    },
    deleteAll(state) {
      const copy = state.commodities.filter(item => item.highlighted !== true);
      state.commodities = copy;
    }
  },
})

export const store = configureStore({
  reducer: {
    commodities: commoditiesSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const { delete: deleteItemRed, add, highlightItem, deleteAll } = commoditiesSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch