import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: {
    studentName: {
      firstName: "",
      midName: "",
      lastName: "",
    },
    birthDate: {
      month: "",
      day: "",
      year: "",
    },
    gender: "",
    address: {
      street_address_01: "",
      street_address_02: "",
      city: "",
      state: "",
      zipCode: "",
    },
    studentEmail: "",
    mobileNumber: "",
    phoneNumber: "",
    workNumber: "",
    company: "",
    courses: "",
    additionalComments: "",
  },
};

const courseSlice = createSlice({
  name: "course",
  initialState: initialValue,
  reducers: {
    setCourseData: (state, action) => {
      state.value = action?.payload;
    },
  },
});

export const { setCourseData } = courseSlice.actions;
export default courseSlice.reducer;
