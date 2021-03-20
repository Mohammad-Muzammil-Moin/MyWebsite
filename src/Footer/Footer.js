import Tooltip from "@material-ui/core/Tooltip";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { breakpoints, flexbox } from "@material-ui/system";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import "./Footer.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { FooterData, FooterData_2 } from "./FooterData";

const ParllaxBg = () => {
  return (
    <>
      <div className="Parllax_image">
        <img src="https://images.wallpaperscraft.com/image/gifts_holiday_package_surprise_50827_1400x1050.jpg" />
      </div>
      <div className="bf-footer">
        <p>30% cashback & Wine exclusive Prices now</p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{
            marginTop: "20px",
          }}
        >
          Learn More
        </Button>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: "crimson",
  },
  tooltip: {
    backgroundColor: "black",
    boxShadow: "1px 1px 1px crimson",
    fontSize: "12px",
  },
}));

export function Footer() {
  const classes = useStyles();
  return (
    <>
      <div>
        <ParllaxBg color="primary" />
        <div className="footer_container">
          <div className="email_Us">
            <h1>Subscribe Now to Up to date to our daily offers</h1>
            <div className="input_field ">
              <TextField
                style={{
                  width: "100%",
                }}
                label="Email"
                id="standard-basic"
                // className={classes.root}
                color="secondary"
                placeholder="Enter Your Email Address"
              />
              <Button
                variant="contained"
                style={{
                  borderRadius: "0px 40px 0px 40px",
                  fontSize: "15px",
                }}
                size="large"
                color="secondary"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="footer_container-2">
          <div className="footerData">
            <div className="Contenct_US">
              <div>
                <span className="logo">
                  Buy
                  <EmojiEmotionsRoundedIcon
                    style={{
                      boxShadow: " 3px 1px 1px black, 1px 3px 1px crimson",
                      borderRadius: "50px",
                    }}
                  />
                </span>
              </div>
              <div className="contact_icon">
                <FacebookIcon className="icon" />
                <TwitterIcon className="icon" />
                <EmailIcon className="icon" />
                <YouTubeIcon className="icon" />
              </div>
            </div>
            <div className="footer_arry">
              {FooterData.map((items, index) => {
                return <p key={index}>{items}</p>;
              })}
            </div>
            <div className="footer_arry_2">
              {FooterData_2.map((items, index) => {
                return <p key={index}>{items}</p>;
              })}
            </div>
          </div>
          <div className="bottom_of_footer">
            Live Yous Life
            <EmojiEmotionsRoundedIcon
              style={{
                boxShadow: " 3px 1px 1px black, 1px 3px 1px crimson",
                borderRadius: "50px",
              }}
            />
          </div>
        </div>
        <div className="copy_right">
          <Tooltip
            arrow
            classes={classes}
            title="Contact Us: muzammilmoin844@gmail.com"
          >
            <p> &copy; M.Muzammil Moin-2020</p>
          </Tooltip>

          <div>
            <FacebookIcon className="bottom_icon" />
            <TwitterIcon className="bottom_icon" />
            <EmailIcon className="bottom_icon" />
            <YouTubeIcon className="bottom_icon" />
          </div>
        </div>
      </div>
    </>
  );
}
