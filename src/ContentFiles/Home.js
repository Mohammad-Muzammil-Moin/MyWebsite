import image from "../ContentFiles/businessman_PNG6558.png";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
} from "react-router-dom";
import { Button, Hidden } from "@material-ui/core";
import { Box } from "@material-ui/core";
import FormPopup from "./Formpopup";
import Products from "../Products/Products";
import Tranding_Products from "../Products/Tranding_Products";
import { fontStyle } from "@material-ui/system";
import { Footer } from "../Footer/Footer";
export default function Home() {
  return (
    <>
      <Box
        clasName="Home"
        style={{
          background: "#6697e0",
          // background: " linear-gradient(rgb(10, 10, 10), rgba(7, 90, 129))",
          // background: " #0d47a1",
          // padding: "10px",
          height: "auto",
        }}
      >
        <div className="Home_contents ">
          <div className="background_div">
            <div className="on_image_contents">
              <img src={image} className="man_image" />
            </div>
            <div className="offer" style={{ color: "black" }}>
              <div className="offer_details">
                <h1 className="disscount">Disscount</h1>
                <h4>50% Discount on your first delivery! </h4>
                <h1>
                  Best Collection Of 2021 buy & wine exclusive prices
                  <FormPopup
                    name="SHOP NOW"
                    style={{
                      marginLeft: "150px",
                    }}
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <h1 className="Product_heading">FEATURED PRODUCTS</h1>
        <Products />
        <h1 className="Product_heading">On Sale</h1>
        <Tranding_Products />
      </Box>
      <Footer />
    </>
  );
}
