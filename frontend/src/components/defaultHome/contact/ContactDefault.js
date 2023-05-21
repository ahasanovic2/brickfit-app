import React from "react";
import { Box } from "@mui/system";

const ContactDefault = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "50px", backgroundColor: "#f5f5f5" }}>
      <Box component="h1" sx={{ color: "#3f51b5", marginBottom: "20px" }}>
        Contact Us
      </Box>
      <Box component="p" sx={{ color: "#333", marginBottom: "10px" }}>
        If you have any questions, please feel free to contact us.
      </Box>
      <Box component="h2" sx={{ color: "#3f51b5", marginBottom: "20px" }}>
        Our Address
      </Box>
      <Box component="p" sx={{ color: "#333", marginBottom: "10px" }}>
        123 Main Street, Anytown, Anywhere
      </Box>
      <Box component="h2" sx={{ color: "#3f51b5", marginBottom: "20px" }}>
        Phone
      </Box>
      <Box component="p" sx={{ color: "#333", marginBottom: "10px" }}>
        +1 (234) 567-8901
      </Box>
      <Box component="h2" sx={{ color: "#3f51b5", marginBottom: "20px" }}>
        Email
      </Box>
      <Box component="p" sx={{ color: "#333", marginBottom: "10px" }}>
        info@example.com
      </Box>
    </Box>
  );
};

export default ContactDefault;
