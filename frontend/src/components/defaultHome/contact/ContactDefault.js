import React from "react";
import { Box } from "@mui/system";

const ContactDefault = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "50px", backgroundColor: "#f5f5f5" }}>
      <Box component="h1" sx={{ color: "#3f51b5", marginBottom: "20px" }}>
        Kontaktirajte nas
      </Box>
      <Box component="p" sx={{ color: "#333", margin: "10px 50px", marginBottom: "10px" }}>
        Imamo otvorena vrata za sva vaša pitanja, prijedloge i upite. Ukoliko želite saznati više o našem fitness centru, našim uslugama ili želite zakazati termin, slobodno nas posjetite ili kontaktirajte. Vaše mišljenje nam je važno i uvijek smo ovdje da vam pružimo podršku i odgovorimo na vaše
        potrebe. Kontaktirajte nas već danas i postanite član naše fitness zajednice koja je posvećena vašem zdravlju i napretku.
      </Box>
      <Box component="h2" sx={{ color: "#3f51b5", marginBottom: "20px" }}>
        Adresa
      </Box>
      <Box component="p" sx={{ color: "#333", marginBottom: "10px" }}>
        Alipašina 45a, Sarajevo, 71000 BiH
      </Box>
      <Box component="h2" sx={{ color: "#3f51b5", marginBottom: "20px" }}>
        Phone
      </Box>
      <Box component="p" sx={{ color: "#333", marginBottom: "10px" }}>
        +38761717171
      </Box>
      <Box component="h2" sx={{ color: "#3f51b5", marginBottom: "20px" }}>
        Email
      </Box>
      <Box component="p" sx={{ color: "#333", marginBottom: "10px" }}>
        {" "}
        kontakt@kontakt.com
      </Box>
    </Box>
  );
};

export default ContactDefault;
