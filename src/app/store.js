import { configureStore } from "@reduxjs/toolkit";
import DoctorSlicer from "../Slicer/DoctorSlicer";
import PatientSlicer from "../Slicer/PatientSlicer";
let store = configureStore({
    reducer: {
        doctors: DoctorSlicer,
        patients: PatientSlicer,
    },
})

export default store;