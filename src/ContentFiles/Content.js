import image from "./ssdsd.jpg";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import {
  Hidden,
  Box,
  Typography,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import React from "react";
import Reviews_stars from "./Reviews_stars";
import { Item_images } from "./Item_images";
import {
  BrowserRouter as Link,
  Router,
  Route,
  NavLink,
} from "react-router-dom";

export default function Content() {
  return (
    <>
      <Box
        width="100%"
        height="100vh"
        style={{
          backgroundColor: "",
        }}
      >
        {/* <Typography variant="h1"> Buy Buy to Live Your Life </Typography> */}

        <h1 className="heading handingSecond">
          <i>
            Bu<sup>y</sup>
          </i>
          <EmojiEmotionsRoundedIcon
            style={{
              boxShadow: " 3px 1px 1px black, 1px 3px 1px crimson",
              borderRadius: "50px",
            }}
          />
          to Live Your Life
        </h1>
        <div className="mainContent">
          <div className="left_descrioption">
            <div className="desciption_top">
              <div className="review_section">
                <h1>ScooterX2</h1>
                <div className="rating_stars">
                  {/* Stars of Reveiws */}
                  <Reviews_stars />
                  <span className="Rating_number">4.5</span>
                  <span className="Rating_reviews">54 Reviews</span>
                </div>
                <p className="for_padding">
                  45 out of 15 (88%) reviews recomend this product
                </p>
                <p>
                  <span className="crimson">33 questions</span> and
                  <span className="crimson"> 33 answers</span> for this product
                </p>
              </div>
              <hr />
              <div className="little_description">
                <div className="buttons">
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button
                      variant="contained"
                      style={{ color: "white" }}
                      color="secondary"
                    >
                      Writ a Reveiw
                    </Button>
                    <Button variant="contained">Ask a Question</Button>
                  </ButtonGroup>
                </div>
                <Hidden xsDown>
                  <p style={{ color: "gray" }}>Side-by-Side Double Stroller.</p>
                  <p>
                    Lorem ipsum dolor sit amet, cu dolore perfecto eam, perfecto
                    menandri pertinacia mel et, ex sit posse tritani
                    liberavisse. Duo scaevola adolescens an, ex his mentitum
                    omnesque apeirian, vel ne soleat cotidieque. Eam in ullum
                    torquatos, ad imperdiet democritum nec, convenire salutatus
                    consectetuer pro ei. Sed id purto facilisis efficiendi, vim
                    blandit delectus delicata ne, pro timeam discere voluptaria
                    ea.
                  </p>
                  <p className="for_padding">
                    Vis populo quodsi efficiendi no, an mel libris timeam
                    dignissim. Cu vim fierent scriptorem, vidit pertinacia
                    disputando mea eu. Eam rebum facete eu, cu his aeterno
                    incorrupte.
                  </p>
                </Hidden>
                <h3 className="price">$279.99</h3>
              </div>
            </div>
          </div>
          <div className="product_image">
            <img className="imageScooter" src={image} />
          </div>
        </div>
      </Box>
      <div className="ItemsIamges">
        {Item_images.map((items, index) => {
          return <img key={index} src={items} />;
        })}
      </div>
    </>
  );
}
