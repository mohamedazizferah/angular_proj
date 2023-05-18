const express = require("express");
const cors = require("cors");
const app = express();
const userService = require("./service/userService");
const appointmentService = require("./service/appointmentService");
app.use(cors());
app.use(express.json());

//users

app.post("/user", userService.create);

app.get("/user", userService.getAll);

app.get("/user/:id", userService.getById);

app.get("/user/role/:role", userService.getByRole);

app.get("/user/city/:city", userService.getByCity);

app.get("/user/country/:country", userService.getByCountry);

app.patch("/user/:id", userService.update);

app.delete("/user/:id", userService.delete);

//appointments

app.post("/appointment", appointmentService.create);

app.get("/appointment", appointmentService.getAll);

app.get("/appointment/:id", appointmentService.getById);

app.get("/appointment/doctor/:doctorId", appointmentService.getByDoctorId);

app.get("/appointment/patient/:patientId", appointmentService.getByPatientId);

app.patch("/appointment/:id", appointmentService.update);

app.delete("/appointment/:id", appointmentService.delete);

module.exports = app;
