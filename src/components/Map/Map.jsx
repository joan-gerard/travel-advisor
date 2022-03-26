import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab'

import useStyles from './styles.js'

export const Map = ({setCoordinates, setBounds, coordinates}) => {

  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)'); // see notes

  console.log('THE COORDINATES', coordinates)

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }} //google map key
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log('&&&&&&', e)
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne: e.center.ne, sw: e.center.sw})
        }}
        // onChange={''}
        // onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

