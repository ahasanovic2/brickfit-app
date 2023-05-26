import React, { useEffect, useState } from "react";
import { Container, Paper, Button, Box, TextField, Autocomplete } from "@mui/material";

export default function OverviewUser() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [korisnici, setKorisnici] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/korisnici")
      .then((res) => res.json())
      .then((result) => {
        setKorisnici(result);
      });
  }, []);

  return (
    <Container>
      <h1 style={{ color: "#1976d2" }}>Korisnici</h1>
      <Paper elevation={3} style={paperStyle}>
        {korisnici.map((korisnik) => (
          <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={korisnik.id}>
            Id: {korisnik.id} <br />
            Username: {korisnik.username} <br />
            Password: {korisnik.password} <br />
            Ime: {korisnik.ime} <br />
            Prezime: {korisnik.prezime} <br />
            Email: {korisnik.email} <br />
            Adresa: {korisnik.adresa} <br />
            Broj telefona: {korisnik.brojTelefona} <br />
            Datum rođenja: {korisnik.datumRodjenja} <br />
            Spol: {korisnik.spol}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
