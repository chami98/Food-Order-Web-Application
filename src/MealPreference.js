import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  },
}));

export default function MealPreference() {
  const classes = useStyles();
  const [mealPreference, setMealPreference] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setMealPreference(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
  
        

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Meal Preference</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={mealPreference}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Chicken'}>Chicken</MenuItem>
          <MenuItem value={'Fish'}>Fish</MenuItem>
          <MenuItem value={'Egg'}>Egg</MenuItem>
          <MenuItem value={'Vegitable'}>Vegitable</MenuItem>
          

        </Select>
      </FormControl>
   
  );
}
