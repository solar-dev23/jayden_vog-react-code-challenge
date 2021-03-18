import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 24,
  },
}));

const PostalLookup = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">Postal Lookup</Typography>
    </div>
  );
};

export default PostalLookup;
