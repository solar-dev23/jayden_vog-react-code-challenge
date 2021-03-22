import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Alert from "@material-ui/lab/Alert";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Input,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import { LOOKUP_POSTAL_CODE } from "../actions/actionTypes";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchLabel: {
    marginRight: 10,
  },
  view: {
    marginTop: 20,
  },
}));

const PostalLookup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postalCodeState = useSelector((state) => state.postalCode);
  const [code, setCode] = useState("");

  useEffect(() => {
    if (!code || code === "") return;

    dispatch({
      type: LOOKUP_POSTAL_CODE,
      code,
    });
  }, [code]);

  const handleLookupCode = (event) => {
    if (event.charCode === 13) {
      const code = event.target.value;
      setCode(code);
    }
  };

  return (
    <div className={classes.root}>
      <Box className={classes.header}>
        <Typography variant="h4">Postal Lookup</Typography>
        <Box className={classes.searchBox}>
          <Typography variant="subtitle1" className={classes.searchLabel}>
            Postal Code:
          </Typography>
          <FormControl>
            <Input
              id="postal-code-search"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
              placeholder="90210"
              onKeyPress={handleLookupCode}
            />
          </FormControl>
        </Box>
      </Box>
      <Box className={classes.view}>
        <Card className={classes.root}>
          <CardContent>
            {postalCodeState.data && (
              <>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Address Details:
                </Typography>
                <Typography variant="body1">
                  Postal Code: {postalCodeState.data["post code"]}
                </Typography>
                <Typography variant="body1" component="h2">
                  Country: {postalCodeState.data.country}
                </Typography>
                <Typography variant="body1">
                  State: {postalCodeState.data["places"][0]["state"]}
                </Typography>
                <Typography variant="body1">
                  Address: {postalCodeState.data["places"][0]["place name"]}
                </Typography>
                <Typography>
                  longitude: {postalCodeState.data["places"][0]["longitude"]}
                  <br />
                  latitude: {postalCodeState.data["places"][0]["latitude"]}
                </Typography>
              </>
            )}
            {postalCodeState.error && (
              <Alert variant="outlined" severity="error">
                Invalid Code.
              </Alert>
            )}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default PostalLookup;
