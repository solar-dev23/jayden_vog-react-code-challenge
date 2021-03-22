import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";

import * as types from "../actions/actionTypes";

const useStyles = makeStyles(() => ({
  actions: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: 10,
  },
  submitBtn: {
    marginRight: 10,
  },
}));

const validationSchema = yup.object({
  title: yup.string("Enter the title").required("title is required"),
  userId: yup.string("Enter user id").required("user id is required"),
  body: yup.string("Enter the body").required("body is required"),
});

const PostModal = ({ open, onClose, onSubmit, selected }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      userId: "",
      body: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      handleSubmit(values);
      onSubmit(values);
      actions.resetForm({
        values: {
          id: "",
          title: "",
          userId: "",
          body: "",
        },
      });
    },
  });

  useEffect(() => {
    formik.resetForm();

    if (selected) {
      formik.values.id = selected.id;
      formik.values.title = selected.title;
      formik.values.userId = selected.userId;
      formik.values.body = selected.body;
    } else {
      formik.values.id = "";
      formik.values.title = "";
      formik.values.userId = "";
      formik.values.body = "";
    }
  }, [selected]);

  const handleSubmit = (post) => {
    if (post.id === "") {
      dispatch({
        type: types.CREATE_POST,
        post,
      });
    } else {
      dispatch({
        type: types.UPDATE_POST,
        post,
      });
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        onSubmit={handleSubmit}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">
          {formik.values && formik.values.id === "" ? "Create" : "Edit"} Post
        </DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              margin="dense"
              id="userId"
              label="User Id"
              type="number"
              fullWidth
              value={formik.values.userId}
              onChange={formik.handleChange}
              error={formik.touched.userId && Boolean(formik.errors.userId)}
              helperText={formik.touched.userId && formik.errors.userId}
            />
            <TextField
              margin="dense"
              id="body"
              label="Body"
              type="text"
              fullWidth
              multiline
              rows={4}
              rowsMax={4}
              value={formik.values.body}
              onChange={formik.handleChange}
              error={formik.touched.body && Boolean(formik.errors.body)}
              helperText={formik.touched.body && formik.errors.body}
            />
            <Box className={classes.actions}>
              <Button variant="contained" onClick={onClose}>
                Cancel
              </Button>
              <Button
                className={classes.submitBtn}
                variant="contained"
                type="submit"
                color="primary"
              >
                Submit
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PostModal;
