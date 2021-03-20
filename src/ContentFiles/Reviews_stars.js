import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";
import { pink, yellow } from "@material-ui/core/colors";
import React from "react";
import { createMuiTheme } from "@material-ui/core";

const Reviews_stars = () => {
  return (
    <>
      <StarIcon color="secondary" />
      <StarIcon color="secondary" />
      <StarIcon color="secondary" />
      <StarIcon color="secondary" />
      <StarHalfIcon color="secondary" />
      <StarOutlineIcon color="secondary" />
    </>
  );
};
export default Reviews_stars;
