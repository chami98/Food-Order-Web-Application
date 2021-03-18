import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import IntakeSelect from "./IntakeSelect";
import { TextField } from "@material-ui/core";
import DepartmentSelect from './DepartmentSelect';
import BilletSelect from './BilletSelect';
import DatePickerDialog from './DatePickerDialog';
import MealPreference from "./MealPreference";
import FoodQuantity from "./FoodQuantity";
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    paddingLeft : theme.spacing(2),
    paddingRight : theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Personal Details</h1>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{padding: 40}}>
        <Grid item xs={4}>
          <TextField
            id="outlined-secondary"
            label="Name"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
        <IntakeSelect />
        </Grid>
        <Grid item xs={4}>
        <DepartmentSelect/>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-secondary"
            label="Phone Number"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
         <BilletSelect/>
        </Grid>
        <Grid item xs={4}>
          <DatePickerDialog/>
        </Grid>
        <Grid item xs={4}>
            <h2>Breakfast</h2>
            <MealPreference/>
            <FoodQuantity/>
            <p>You can collect your food at Cafeteria.</p>
        </Grid>
        <Grid item xs={4}>
            <h2>Lunch</h2>
            <MealPreference/>
            <FoodQuantity/>
            <p>You can collect your food at Cafeteria or your Billet</p>
        </Grid>

        <Grid item xs={4}>
            <h2>Dinner</h2>
            <MealPreference/>
            <FoodQuantity/>
            <p>You can collect your food at your Billet.</p>
        </Grid>

        
        <Grid item xs={12}>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
           
        </Grid>
      </Grid>
    </div>
  );
}
