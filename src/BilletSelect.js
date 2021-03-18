import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width : '100%'
  },
}));

export default function BilletSelect() {
  const classes = useStyles();
  const [billet, setBillet] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setBillet(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
      <FormControl className={classes.formControl}>
        <InputLabel>Choose Your Billet</InputLabel>
        <Select
          // label="Choose Your Billet"
          placeholder="Choose Your Billet"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={billet}
          onChange={handleChange}
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Alpha'}>Alpha</MenuItem>
          <MenuItem value={'Bravo'}>Bravo</MenuItem>
          <MenuItem value={'Charlie'}>Charlie</MenuItem>
          <MenuItem value={'Delta'}>Delta</MenuItem>
          <MenuItem value={'Foxtrot'}>Foxtrot</MenuItem>

        </Select>
      </FormControl>
  );
}
