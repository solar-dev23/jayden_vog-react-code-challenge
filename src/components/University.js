import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 24,
  },
}));

const University = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">Universities</Typography>
    </div>
  );
};

export default University;
