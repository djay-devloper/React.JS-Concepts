import {configureStore} from '@reduxjs/toolkit';
import { todoSlice } from '../features/todo/todoSlice';

export const store= configureStore({
    reducer: todoSlice.reducer
})



// 4 things to learn: store, reducers, useselector, usedispatch.