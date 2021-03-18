import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

import * as types from "../actions/actionTypes";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 24,
  },
  dataView: {
    marginTop: 20,
    height: 370,
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.data);

  console.log(posts);

  useEffect(() => {
    dispatch({
      type: types.GET_POST_LIST,
      query: "",
    });
  }, []);

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 1000,
    maxColumns: 6,
  });

  return (
    <div className={classes.root}>
      <Typography variant="h4">Posts</Typography>
      <div className={classes.dataView}>
        <DataGrid
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          {...data}
        />
      </div>
    </div>
  );
};

export default Home;
