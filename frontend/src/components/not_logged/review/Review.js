import React, { useEffect, useState } from "react";
import { Container, Paper, Button, Box, TextField, Autocomplete } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

export default function Review() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [vrijednost, setVrijednost] = useState(3);
  const [hover, setHover] = useState(-1);
  const [komentar, setKomentar] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const recenzija = {
      ocjena: vrijednost,
      opis: komentar,
    };
    console.log(recenzija);
    fetch("http://localhost:8080/recenzija/4", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recenzija),
    }).then(() => {
      console.log("Thank you for your review!");
    });
  };

  const labels = {
    1: "Loše",
    2: "Zadovoljavajuće",
    3: "Dobro",
    4: "Vrlo dobro",
    5: "Odlično",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "#1976d2" }}>Ostavljanje recenzije</h1>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Rating
            defaultValue={3}
            size="large"
            name="hover-feedback"
            vrijednost={vrijednost}
            precision={1.0}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setVrijednost(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {vrijednost !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : vrijednost]}</Box>}
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            marginTop: "10px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField InputLabelProps={{ shrink: true }} id="outlined-multiline-static" label="Komentar" multiline rows={6} defaultValue="" fullWidth value={komentar} onChange={(e, newValue) => setKomentar(e.target.value)} />
        </Box>
        <Button variant="contained" onClick={handleClick}>
          Ostavi recenziju
        </Button>
      </Paper>
    </Container>
  );
}
