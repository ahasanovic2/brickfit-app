import React, { useEffect, useState } from "react";
import { Container, Paper, Button, Box, TextField } from "@mui/material";

export default function AddUser() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [email, setEmail] = useState("");
  const [adresa, setAdresa] = useState("");
  const [brojTelefona, setBrojTelefona] = useState("");
  const [datumRodjenja, setDatumRodjenja] = useState("");
  const [spol, setSpol] = useState("");
  const [korisnici, setKorisnici] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const korisnik = {
      ime,
      prezime,
      email,
      adresa,
      brojTelefona,
      datumRodjenja,
      spol,
    };
    //console.log(korisnik);
    fetch("http://localhost:8080/dodajKorisnika", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(korisnik),
    }).then(() => {
      console.log("Novi korisnik je uspješno dodan!");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/korisnici")
      .then((res) => res.json())
      .then((result) => {
        setKorisnici(result);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "#1976d2" }}>Dodaj korisnika</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Ime" variant="outlined" value={ime} onChange={(e) => setIme(e.target.value)} fullWidth />
          <TextField id="outlined-basic" label="Prezime" variant="outlined" value={prezime} onChange={(e) => setPrezime(e.target.value)} fullWidth />
          <TextField id="outlined-basic" label="E-mail" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
          <TextField id="outlined-basic" label="Adresa" variant="outlined" value={adresa} onChange={(e) => setAdresa(e.target.value)} fullWidth />
          <TextField id="outlined-basic" label="Broj telefona" variant="outlined" value={brojTelefona} onChange={(e) => setBrojTelefona(e.target.value)} fullWidth />
          <TextField id="outlined-basic" label="Datum rođenja" variant="outlined" value={datumRodjenja} onChange={(e) => setDatumRodjenja(e.target.value)} fullWidth />
          <TextField id="outlined-basic" label="Spol" variant="outlined" value={spol} onChange={(e) => setSpol(e.target.value)} fullWidth />
          <Button variant="contained" onClick={handleClick}>
            Dodaj
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
