import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";



export default function FoodPreferences() {
  const [foodPreferance, setFoodPreferance] = React.useState("Chicken");

  const handleChange = (event) => {
    setFoodPreferance(event.target.value);
  };

  return (
    <div>
   
      <FormControl component="fieldset">
        <FormLabel component="legend">Food Preferences</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={foodPreferance}
          onChange={handleChange}
        >
          <FormControlLabel
            value="chicken"
            control={<Radio />}
            label="Chicken"
          />
          <FormControlLabel value="egg" control={<Radio />} label="Egg" />
          <FormControlLabel value="fish" control={<Radio />} label="Fish" />
        </RadioGroup>

        
      </FormControl>
    </div>
  );
}
