import React, {useState} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import {PlaceDetails} from '../PlaceDetails/PlaceDetails'
import useStyles from './styles.js'


export const List = () => {

  const classes = useStyles();
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const places = [
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'},
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'}
  ]

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants and Hotels around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3 stars</MenuItem>
          <MenuItem value={4}>Above 4 stars</MenuItem>
          <MenuItem value={4.5}>Above 4.5 stars</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, idx) => (
          <Grid item key={idx} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

