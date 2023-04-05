import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { fetchData } from "../../../utils/fetcher";

export default function Regsiter() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetchData("/api/auth/register", fields);
  };

  const handleField = async (e: any) => {
    const name = e.target.name;
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        background: "white",
      }}
    >
      <Box
        sx={{
          width: "75%",
          height: "auto",
          background: "white",
          padding: "15px",
          borderRadius: "4px",
          borderTop: "6px solid #667ACD",
          boxShadow: "2px 4px 10px #919191",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.8em",
            fontWeight: 600,
            color: "#796FD1",
            borderBottom: "1px solid grey",
            paddingBottom: "15px",
            textTransform: "uppercase",
          }}
        >
          Registrasi Form
        </h2>
        <Box sx={{ mt: "20px" }}>
          <form
            method="POST"
            onSubmit={handleSubmit}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <FormControl fullWidth={true} style={{ marginBottom: "16px" }}>
              <TextField
                variant="outlined"
                onChange={(e) => {
                  handleField(e);
                }}
                name="name"
                label="Nama Lengkap"
              ></TextField>
            </FormControl>

            <FormControl fullWidth={true} style={{ marginBottom: "16px" }}>
              <TextField
                variant="outlined"
                onChange={(e) => {
                  handleField(e);
                }}
                name="email"
                label="Email"
              ></TextField>
            </FormControl>

            <FormControl fullWidth={true} style={{ marginBottom: "16px" }}>
              <TextField
                variant="outlined"
                onChange={(e) => {
                  handleField(e);
                }}
                name="password"
                label="Password"
              ></TextField>
            </FormControl>

            <FormControl fullWidth={true}>
              <TextField
                variant="outlined"
                label="Masukkan Alamat Lengkap"
                name="address"
                onChange={(e) => {
                  handleField(e);
                }}
              ></TextField>
            </FormControl>
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <Button type="submit" variant="contained" size="large">
                Register
              </Button>
            </div>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
