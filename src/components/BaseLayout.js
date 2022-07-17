import React, { useState } from "react";
import Style from "./BaseLayout.module.scss";
import Style1 from "./home/Home.module.scss";
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  function goToTop() {
    window.scrollTo({
      top: 99999,
      behavior: "smooth",
    });
  }
  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
        sx={{
          "@media (max-width: 780px)": {
            padding: "1.2rem",
          },
        }}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/about"} element={<About />} />
            <Route exact path={"/portfolio"} element={<Portfolio />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <Typography
              variant="h4"
              sx={{
                "@media (max-width: 780px)": {
                  fontSize: "1.2rem",
                },
              }}
              component="h4"
            >
              Scroll down
              <span className={Style1.handPointer} onClick={goToTop}>
                ⬇️
              </span>
            </Typography>
            <p>
              The site created with &hearts; by{" "}
              <a href={"https://google.com"}>Jimmy Nguyen</a>
            </p>
            <p>&copy; 2022</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
