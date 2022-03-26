import { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import { Map } from './components/Map/Map';

export const App = () => {
  const [places, setPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log('THE PLACES', data)
        setPlaces(data)
      })
  }, [coordinates, bounds])

console.log('THE PLACES - 2', places)
console.log('#####', coordinates)

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
      {/* see notes for below */}
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates} />
        </Grid>
      </Grid>
    </>
  );
}
