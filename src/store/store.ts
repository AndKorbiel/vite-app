import { configureStore } from "@reduxjs/toolkit";
import { trainingDataSlice } from "./trainingDataSlice";

export const store = configureStore({
  reducer: {
    trainingData: trainingDataSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
