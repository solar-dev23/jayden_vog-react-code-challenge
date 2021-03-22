import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Select, ListItem } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

import { GET_COUNTRIES, GET_UNIVERSITIES } from "../actions/actionTypes";
import EmptyOverlayGrid from "./EmptyOverlayGrid";

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
  dropdown: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  countryLabel: {
    marginRight: 10,
  },
}));

const Universities = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const universities = useSelector((state) => state.university.list);
  const countries = useSelector((state) => state.university.countries);
  const [country, setCountry] = useState("Algeria");
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "country", headerName: "Country", flex: 0.3 },
    { field: "name", headerName: "name", flex: 0.5 },
    { field: "domain", headerName: "Domain", flex: 1 },
  ];

  useEffect(() => {
    dispatch({
      type: GET_COUNTRIES,
    });
  }, []);

  useEffect(() => {
    if (!country || country === "") return;

    dispatch({
      type: GET_UNIVERSITIES,
      country,
    });
  }, [country]);

  useEffect(() => {
    if (!universities) return;

    const items = universities.map((university, index) => {
      let item = Object.assign({}, university);
      item.id = index + 1;
      item.domain = university.domains[0];
      return item;
    });
    setRows(items);
  }, [universities]);

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.header}>
        <Typography variant="h4">Universities</Typography>
        <Box className={classes.dropdown}>
          <Typography variant="subtitle1" className={classes.countryLabel}>
            Countries:
          </Typography>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={country}
            onChange={handleChangeCountry}
          >
            {countries &&
              Object.keys(countries).length > 0 &&
              Object.keys(countries).map((key) => (
                <ListItem key={key} value={countries[key].country}>
                  {countries[key].country}
                </ListItem>
              ))}
          </Select>
        </Box>
      </Box>
      <Box className={classes.dataView}>
        {rows && (
          <DataGrid
            pageSize={10}
            rowsPerPageOptions={[10, 50, 100]}
            pagination
            rows={rows}
            columns={columns}
            autoHeight={true}
            components={{
              NoRowsOverlay: EmptyOverlayGrid,
            }}
          />
        )}
      </Box>
    </div>
  );
};

export default Universities;
