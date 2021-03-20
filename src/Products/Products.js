import Tooltip from "@material-ui/core/Tooltip";
import { Button, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import { newProductData, ProductData } from "./ProdusctData";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Products.css";
// import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: "black",
  },
  tooltip: {
    backgroundColor: "black",
    boxShadow: "1px 1px 1px crimson",
    fontSize: "15px",
  },
}));
export default function Products() {
  const classes = useStyles();
  return (
    <>
      <div className="Product_Container">
        {ProductData.map((items, index) => {
          return (
            <div className="products">
              <Link to="#">
                <img src={items.image} />
              </Link>
              <div className="desciption_products">
                <span>
                  {items.reviews}
                  <code>{items.Rating}</code>
                </span>
                <div className="head_prics">
                  <h1>{items.productName}</h1>
                  <code>{items.prices}</code>
                </div>

                <div
                  className="accordion"
                  style={{
                    color: "black",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <div className="AccordionSummary">
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Hidden smDown>
                          <h2
                            style={{
                              marginBottom: "10px",
                            }}
                          >
                            About Product
                          </h2>
                        </Hidden>
                        <p className="productDescriptio">
                          {items.productDescription}
                        </p>
                        <div className="icons">
                          <Tooltip
                            arrow
                            classes={classes}
                            title="Add to wishlist"
                            aria-label="add"
                          >
                            {items.wishlistIcon}
                          </Tooltip>
                          <Tooltip
                            arrow
                            classes={classes}
                            title="Add to cart"
                            aria-label="add"
                          >
                            {items.cartIcon}
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="Product_heading">New Products</h1>
      <div className="Product_Container">
        {newProductData.map((items, index) => {
          return (
            <div className="products">
              <Link to="#">
                <img src={items.image} />
              </Link>
              <div className="desciption_products">
                <span>
                  {items.reviews}
                  <code>{items.Rating}</code>
                </span>
                <div className="head_prics">
                  <h1>{items.productName}</h1>
                  <code>{items.prices}</code>
                </div>

                <div
                  className="accordion"
                  style={{
                    color: "black",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <div className="AccordionSummary">
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Hidden smDown>
                          <h2
                            style={{
                              marginBottom: "10px",
                            }}
                          >
                            About Product
                          </h2>
                        </Hidden>
                        <p className="productDescriptio">
                          {items.productDescription}
                        </p>
                        <div className="icons">
                          <Tooltip
                            arrow
                            classes={classes}
                            title="Add to wishlist"
                            aria-label="add"
                          >
                            {items.wishlistIcon}
                          </Tooltip>
                          <Tooltip
                            arrow
                            classes={classes}
                            title="Add to cart"
                            aria-label="add"
                          >
                            {items.cartIcon}
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
