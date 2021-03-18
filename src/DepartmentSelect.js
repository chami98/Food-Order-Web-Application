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

export default function DepartmentSelect() {
  const classes = useStyles();
  const [department, setDepartment] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
  
        

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Department</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={department}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Information Technology'}>Information Technology</MenuItem>
          <MenuItem value={'Quantity Surveying'}>Quantity Surveying</MenuItem>
          <MenuItem value={'Survey Science'}>Survey Science</MenuItem>
          <MenuItem value={'Architecture'}>Architecture</MenuItem>
          

        </Select>
      </FormControl>
   
  );
}
