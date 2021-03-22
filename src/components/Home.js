import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import * as types from "../actions/actionTypes";
import PostModal from "./PostModal";
import Alert from "./Alert";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  dataView: {
    marginTop: 20,
  },
  iconButton: {
    padding: 5,
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const posts = useSelector((state) => state.post.list);
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isDelete, setDelete] = useState(false);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Title", flex: 0.3 },
    { field: "userId", headerName: "User Id" },
    { field: "body", headerName: "Body", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: () => (
        <>
          <IconButton
            className={classes.iconButton}
            aria-label="edit"
            onClick={() => setOpen(true)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            className={classes.iconButton}
            aria-label="delete"
            onClick={() => setDelete(true)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  useEffect(() => {
    dispatch({
      type: types.GET_POST_LIST,
      query: "",
    });
  }, []);

  useEffect(() => {
    if (!posts) return;

    setRows(posts);
  }, [posts]);

  const openCreate = () => {
    setSelected(null);
    setOpen(true);
  };

  const handleSubmit = (data) => {
    setOpen(false);

    if (data.id === "") setRows([...rows, data]);
    else setRows(rows.map((row) => (row.id === data.id ? data : row)));
  };

  const handleDelete = () => {
    dispatch({
      type: types.DELETE_POST,
      postId: selected.id,
    });

    setDelete(false);
    setRows(rows.filter((row) => row.id !== selected.id));
  };

  return (
    <div className={classes.root}>
      <Box className={classes.header}>
        <Typography variant="h4">Posts</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={openCreate}
        >
          Add
        </Button>
      </Box>

      <Box className={classes.dataView}>
        {rows && rows.length > 0 && (
          <DataGrid
            pageSize={10}
            rowsPerPageOptions={[10, 50, 100]}
            pagination
            rows={rows}
            columns={columns}
            loading={rows.length === 0}
            autoHeight={true}
            onRowSelected={(e) => setSelected(e.data)}
          />
        )}
      </Box>
      <PostModal
        open={isOpen}
        onClose={() => setOpen(false)}
        onSubmit={(data) => handleSubmit(data)}
        selected={selected}
      />
      <Alert
        open={isDelete}
        onClose={() => setDelete(false)}
        onSubmit={() => handleDelete()}
        content={{
          text: "Are you sure to delete this post?",
          type: "delete",
        }}
      />
    </div>
  );
};

export default Home;
