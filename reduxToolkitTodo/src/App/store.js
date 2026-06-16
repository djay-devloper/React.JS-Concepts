// This code is setting up the central Redux Store for your application using Redux Toolkit (RTK).

import {configureStore} from '@reduxjs/toolkit';
import { todoSlice } from '../features/todo/todoSlice';

export const store= configureStore({

    // You are telling the store how to handle state updates.
    reducer: todoSlice.reducer
})



// 4 things to learn: store, reducers, useselector, usedispatch.