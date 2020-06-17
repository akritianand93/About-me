import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Introduction.css';
const useStyles = makeStyles(() => ({
  margin: {
      margin: "10px",
  },
}));

const Ribbon=({onClickIntro, onClickTravel,onClickFood,onClickCulture})=> {
    const classes = useStyles();
    return(
        <div className="ribbon_styles" >
            <Button id="travel" className={classes.margin} variant="contained" color="primary" href="#contained-buttons"
            onClick={onClickIntro}>
                Intro
            </Button>
            <Button id="travel" className={classes.margin} variant="contained" color="primary" href="#contained-buttons"
            onClick={onClickTravel}>
                Travel
            </Button>
            <Button id="food" className={classes.margin} variant="contained" color="primary" href="#contained-buttons"
            onClick={onClickFood}>
                 Food
             </Button>
            <Button id="culture" className={classes.margin} variant="contained" color="primary" href="#contained-buttons"
            onClick={onClickCulture}>
                 Culture
             </Button>
        </div>
    )};
export default Ribbon;

