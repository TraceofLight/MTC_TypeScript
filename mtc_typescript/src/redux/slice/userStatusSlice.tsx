import { authenticationInstance } from "FirebaseConfig";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const authenticationCheck = createAsyncThunk<void>(
  "userStatus/authenticationCheck",
  (_, { dispatch }) => {
    authenticationInstance.onAuthStateChanged((user) => {
      // Firebase로부터 유저 정보 비동기 처리
      dispatch(SET_USER(user));
      dispatch(SET_EMAIL_VERIFIED(user?.emailVerified));
      dispatch(SET_PHONE_NUMBER(user?.phoneNumber));
    });
  }
);

const userStatusSlice = createSlice({
  name: "userStatus",
  initialState: {
    // Firebase로부터 받을 수 있는 데이터
    currentUser: null,
    emailVerified: null,
    phoneNumber: null,
  },
  reducers: {
    // Firebase로부터 데이터 세팅
    SET_USER: (state, action) => {
      state.currentUser = action.payload;
    },

    SET_EMAIL_VERIFIED: (state, action) => {
      state.emailVerified = action.payload;
    },

    SET_PHONE_NUMBER: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticationCheck.fulfilled, () => {
      // for keep status
    });
  },
});

export const { SET_USER, SET_EMAIL_VERIFIED, SET_PHONE_NUMBER } =
  userStatusSlice.actions;
export default userStatusSlice.reducer;
