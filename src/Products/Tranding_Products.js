import Tooltip from "@material-ui/core/Tooltip";
import { Button, Hidden } from "@material-ui/core";
import React, { useState } from "react";
import {
  newProductData,
  ProductData,
  SalesProduct2,
  SalesProduct,
} from "./ProdusctData";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Products.css";
// import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
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
export default function Tranding_Products() {
  const classes = useStyles();
  return (
    <>
      <div className="container_Products container-2">
        {SalesProduct.map((items, index) => {
          return (
            <div className="products-2">
              <div className="description_container">
                <Link to="#">
                  <img src={items.image} />
                </Link>
                <div className="description-1">
                  <span>
                    {items.reviews}
                    <code>{items.Rating}</code>
                  </span>
                  <div className="head_prics">
                    <h1>{items.productName}</h1>
                    <code>{items.prices}</code>
                  </div>

                  <div
                    className="accordion-1"
                    style={{
                      color: "",
                      width: "",
                      borderRadius: "",
                    }}
                  >
                    <div className="AccordionSummary-1">
                      <div>
                        <div
                          style={{
                            display: "",
                            flexDirection: "",
                          }}
                        >
                          <Hidden smDown>
                            <h2
                              style={{
                                marginBottom: "",
                              }}
                            >
                              About Product
                            </h2>
                          </Hidden>
                          <p className="">{items.productDescription}</p>
                          <div className="icons-1">
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
            </div>
          );
        })}
        {SalesProduct2.map((items, index) => {
          return (
            <div className="products-2">
              <div className="description_container">
                <Link to="#">
                  <img src={items.image} />
                </Link>
                <div className="description-1">
                  <span>
                    {items.reviews}
                    <code>{items.Rating}</code>
                  </span>
                  <div className="head_prics">
                    <h1>{items.productName}</h1>
                    <code>{items.prices}</code>
                  </div>

                  <div
                    className="accordion-1"
                    style={{
                      color: "",
                      width: "",
                      borderRadius: "",
                    }}
                  >
                    <div className="AccordionSummary-1">
                      <div>
                        <div
                          style={{
                            display: "",
                            flexDirection: "",
                          }}
                        >
                          <Hidden smDown>
                            <h2
                              style={{
                                marginBottom: "",
                              }}
                            >
                              About Product
                            </h2>
                          </Hidden>
                          <p className="">{items.productDescription}</p>
                          <div className="icons-1">
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
            </div>
          );
        })}
      </div>
    </>
  );
}
