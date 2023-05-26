import React, { useEffect, useState } from "react";
import { Container, Paper, Button, Box, TextField, Autocomplete } from "@mui/material";

export default function AppointmentReservation() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [appointment, setAppointment] = useState("");
  const [training, setTraining] = useState("");
  const [trainer, setTrainer] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [additionalComment, setAdditionalComment] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const reservation = {
      termin: appointment,
      trening: training,
      trener: trainer,
      vrstaTreninga: trainingType,
      additionalComment,
    };
    fetch("http://localhost:8080/dodajTermin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    }).then(() => {
      console.log("New appointment is successfully added!");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/termini")
      .then((res) => res.json())
      .then((result) => {
        console.log(
          "USLO",
          result.map((el) => el.termin)
        );
        setDbAppointments(result.map((el) => el.termin));
      });
  }, []);

  const allAppointments = [
    "Monday 09:00-10:00",
    "Monday 10:00-11:00",
    "Monday 11:00-12:00",
    "Monday 12:00-13:00",
    "Monday 13:00-14:00",
    "Monday 14:00-15:00",
    "Monday 15:00-16:00",
    "Monday 16:00-17:00",
    "Monday 17:00-18:00",
    "Monday 18:00-19:00",
    "Monday 19:00-20:00",
    "Monday 20:00-21:00",
    "Monday 21:00-22:00",
    "Monday 22:00-23:00",
    "Monday 23:00-24:00",
    "Tuesday 09:00-10:00",
    "Tuesday 10:00-11:00",
    "Tuesday 11:00-12:00",
    "Tuesday 12:00-13:00",
    "Tuesday 13:00-14:00",
    "Tuesday 14:00-15:00",
    "Tuesday 15:00-16:00",
    "Tuesday 16:00-17:00",
    "Tuesday 17:00-18:00",
    "Tuesday 18:00-19:00",
    "Tuesday 19:00-20:00",
    "Tuesday 20:00-21:00",
    "Tuesday 21:00-22:00",
    "Tuesday 22:00-23:00",
    "Tuesday 23:00-24:00",
    "Wednesday 09:00-10:00",
    "Wednesday 10:00-11:00",
    "Wednesday 11:00-12:00",
    "Wednesday 12:00-13:00",
    "Wednesday 13:00-14:00",
    "Wednesday 14:00-15:00",
    "Wednesday 15:00-16:00",
    "Wednesday 16:00-17:00",
    "Wednesday 17:00-18:00",
    "Wednesday 18:00-19:00",
    "Wednesday 19:00-20:00",
    "Wednesday 20:00-21:00",
    "Wednesday 21:00-22:00",
    "Wednesday 22:00-23:00",
    "Wednesday 23:00-24:00",
    "Thursday 09:00-10:00",
    "Thursday 10:00-11:00",
    "Thursday 11:00-12:00",
    "Thursday 12:00-13:00",
    "Thursday 13:00-14:00",
    "Thursday 14:00-15:00",
    "Thursday 15:00-16:00",
    "Thursday 16:00-17:00",
    "Thursday 17:00-18:00",
    "Thursday 18:00-19:00",
    "Thursday 19:00-20:00",
    "Thursday 20:00-21:00",
    "Thursday 21:00-22:00",
    "Thursday 22:00-23:00",
    "Thursday 23:00-24:00",
    "Friday 09:00-10:00",
    "Friday 10:00-11:00",
    "Friday 11:00-12:00",
    "Friday 12:00-13:00",
    "Friday 13:00-14:00",
    "Friday 14:00-15:00",
    "Friday 15:00-16:00",
    "Friday 16:00-17:00",
    "Friday 17:00-18:00",
    "Friday 18:00-19:00",
    "Friday 19:00-20:00",
    "Friday 20:00-21:00",
    "Friday 21:00-22:00",
    "Friday 22:00-23:00",
    "Friday 23:00-24:00",
    "Saturday 09:00-10:00",
    "Saturday 10:00-11:00",
    "Saturday 11:00-12:00",
    "Saturday 12:00-13:00",
    "Saturday 13:00-14:00",
    "Saturday 14:00-15:00",
    "Saturday 15:00-16:00",
    "Saturday 16:00-17:00",
    "Saturday 17:00-18:00",
    "Saturday 18:00-19:00",
    "Saturday 19:00-20:00",
    "Saturday 20:00-21:00",
    "Saturday 21:00-22:00",
    "Saturday 22:00-23:00",
    "Saturday 23:00-24:00",
    "Sunday 09:00-10:00",
    "Sunday 10:00-11:00",
    "Sunday 11:00-12:00",
    "Sunday 12:00-13:00",
    "Sunday 13:00-14:00",
    "Sunday 14:00-15:00",
    "Sunday 15:00-16:00",
    "Sunday 16:00-17:00",
    "Sunday 17:00-18:00",
    "Sunday 18:00-19:00",
    "Sunday 19:00-20:00",
    "Sunday 20:00-21:00",
    "Sunday 21:00-22:00",
    "Sunday 22:00-23:00",
    "Sunday 23:00-24:00",
  ];

  const [dbAppointments, setDbAppointments] = useState(null);

  const allTrainings = ["Individual training", "Training in pair", "Group training"];
  const allTrainers = ["Muhamed Borovac", "Vedad Dervisevic", "Ahmedin Hasanovic", "Benjamin Pasic", "Admir Pozderac"];
  const allTrainingTypes = ["Cardio", "Fitness", "Crossfit", "Dumbbells"];

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "#1976d2" }}>Rezervacija termina</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={dbAppointments != null ? allAppointments.filter((el) => !dbAppointments.includes(el)) : allAppointments}
            renderInput={(params) => <TextField {...params} label="Termin" />}
            onChange={(e, newValue) => {
              setAppointment(newValue);
            }}
          />
          <Autocomplete disablePortal id="combo-box-demo" options={allTrainings} renderInput={(params) => <TextField {...params} label="Trening" />} onChange={(e, newValue) => setTraining(newValue)} />
          <Autocomplete disablePortal id="combo-box-demo" options={allTrainers} renderInput={(params) => <TextField {...params} label="Trener" />} onChange={(e, newValue) => setTrainer(newValue)} />
          <Autocomplete disablePortal id="combo-box-demo" options={allTrainingTypes} renderInput={(params) => <TextField {...params} label="Vrsta treninga" />} onChange={(e, newValue) => setTrainingType(newValue)} />
          <TextField InputLabelProps={{ shrink: true }} id="outlined-multiline-static" label="Dodatni komentar" multiline rows={4} defaultValue="" fullWidth value={additionalComment} onChange={(e, newValue) => setAdditionalComment(newValue)} />

          <Button variant="contained" onClick={handleClick}>
            Rezervisi termin
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
