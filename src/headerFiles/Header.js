import FormPopup from "../ContentFiles/Formpopup";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EcoIcon from "@material-ui/icons/Eco";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import LoginForm from "../ContentFiles/LoginForm";

import LoginForm2 from "../ContentFiles/LoginForm2";

import { createMuiTheme } from "@material-ui/core/styles";
import { blue, pink, purple, black, yellow } from "@material-ui/core/colors";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import { breakpoints, flexbox } from "@material-ui/system";
import { Class, Search, SignalCellularNullSharp } from "@material-ui/icons";
import ResponsiveDrawer, { SignUp, NavItems } from "./sidbar";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  Grid,
  GridListTile,
  ListSubheader,
  TextField,
  ButtonGroup,
  Button,
  Box,
  Hidden,
} from "@material-ui/core";
import Navigation_items from "./Navbar";
const BackgroundTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#6697e0",
    },
    secondary: {
      main: pink[500],
    },
    aditionary: {
      main: yellow[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "80ch",

      color: "White",
      // display: "flex",
      // justifyContent: "flex-start",
      // alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        width: "23ch",
        marginBottom: "10px",
        marginLeft: "5px",
      },
      [theme.breakpoints.up("md")]: {
        width: "50ch",
      },
    },
    shadow: {
      boxShadow: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [chek, setchek] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const check_condition = () => {
    setchek(!chek);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <ThemeProvider theme={BackgroundTheme}>
      <div className="main">
        <AppBar
          position="fixed"
          style={{
            zIndex: "10",
            opacity: "0.9",
          }}
          color="primary"
        >
          <Toolbar>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                <div paddingRight="">
                  <h1
                    className="heading"
                    style={{
                      color: "black",
                    }}
                  >
                    <i>
                      Bu<sup>y</sup>
                    </i>

                    <EcoIcon
                      style={{
                        boxShadow: " 3px 1px 1px black, 1px 3px 1px white",
                        borderRadius: "50px",
                        fontSize: "30px",
                      }}
                    />
                  </h1>
                </div>
              </Link>
              <div>
                <TextField
                  label={<Search />}
                  id="standard-basic"
                  type="text"
                  className={classes.root}
                  color="secondary"
                  placeholder="Search"
                />
              </div>
              <Navigation_items />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Hidden xsDown>
                  <FormPopup name="Sign In / UP" />
                </Hidden>
              </div>
              <ResponsiveDrawer />
            </div>
            <ButtonStyle />
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

function ButtonStyle() {
  // const classes = ButtonStyles();
  return (
    <div
      className="ButtonSingInUp"
      style={{
        cursor: "pointer",
      }}
    >
      <AccountCircleIcon />
    </div>
  );
}
