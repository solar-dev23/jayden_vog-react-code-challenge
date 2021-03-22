import React from "react";
import { GridOverlay } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as EmptyOverlayGridSvg } from "../assets/images/empty-overlay-grid.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "column",
    padding: "20px 0",
  },
  label: {
    marginTop: theme.spacing(1),
  },
}));

const EmptyOverlayGrid = () => {
  const classes = useStyles();

  return (
    <GridOverlay className={classes.root}>
      <EmptyOverlayGridSvg />
      <div className={classes.label}>No Rows</div>
    </GridOverlay>
  );
};

export default EmptyOverlayGrid;
