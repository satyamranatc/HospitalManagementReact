import { configureStore } from "@reduxjs/toolkit";
import DoctorSlicer from "../Slicer/DoctorSlicer";
let store = configureStore({
    reducer: {
        doctors: DoctorSlicer,
    },
})

export default store;