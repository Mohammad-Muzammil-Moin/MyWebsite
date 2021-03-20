import PropTypes from "prop-types";
import LoginForm2 from "./LoginForm2";
import LoginForm from "./LoginForm";
import "./FormPopup.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import { themeProvider, withStyles } from "@material-ui/core";
import { Button, ButtonGroup } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    background: " rgba(0, 0, 0, 0.7)",
  },
});

function FormPopup(props, { width, color }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [isClick, setisClick] = useState(null);
  return (
    <themeProvider>
      <div>
        <Button
          style={{
            // marginLeft: "150px",
            borderRadius: "0px 50px 0px 50px",
            // width: "50px",
          }}
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          <div
            style={{
              fontFamily: " Haettenschweiler",
              fontWeight: "bold",
            }}
          >
            {props.name}
          </div>
        </Button>
        <Popover
          className={classes.root}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "right",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div className="form_container">
            <ButtonGroup
              variant="contained"
              disableElevation
              color="secondary"
              size="small"
            >
              <Button
                onClick={() => {
                  setisClick(!isClick);
                }}
              >
                {isClick ? <span>Sign Up</span> : <span>Sign In</span>}
              </Button>
            </ButtonGroup>
            <p className="login">Join our comunity</p>
          </div>
          {isClick ? <LoginForm2 /> : <LoginForm />}
        </Popover>
      </div>
    </themeProvider>
  );
}
FormPopup.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
};
export default FormPopup;
