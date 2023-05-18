const appointment = require("../models/appointment");

const appointmentService = {
  create: async (req, res) => {
    const appointmentCreated = await appointment.create(req.body);
    res.status(200).json(appointmentCreated);
  },
  getAll: async (req, res) => {
    const appointments = await appointment.find();
    res.status(200).json(appointments);
  },
  getById: async (req, res) => {
    const id = req.params.id;
    const appointments = await appointment.findById(id);
    res.status(200).json(appointments);
  },
  getByDoctorId: async (req, res) => {
    const doctorId = req.params.doctorId;
    const appointments = await appointment.find({ doctorId: doctorId });
    res.status(200).json(appointments);
  },
  getByPatientId: async (req, res) => {
    const patientId = req.params.patientId;
    const appointments = await appointment.find({ patientId: patientId });
    res.status(200).json(appointments);
  },
  update: async (req, res) => {
    const id = req.params.id;
    const updatedAppointment = await appointment.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedAppointment);
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const deletedAppointment = await appointment.findByIdAndDelete(id);
    res.status(200).json(deletedAppointment);
  },
};

module.exports = appointmentService;
