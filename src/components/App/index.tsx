import React from 'react'

import LocationSelect from '../LocationSelect'
import Forecast from '../Forecast'
import { Location } from '../../api/location'

import styles from './App.module.css'

const App = () => {

  const [location, setLocation] = React.useState<Location | null>(null)

  return <div className={styles.container}>
    <span>What is the weather in</span>
    <LocationSelect onSelect={(value: Location) => setLocation(value)} />
    <Forecast location={location} />
  </div>
}

export default App
