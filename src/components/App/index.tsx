import React from 'react'

import LocationSelect from '../LocationSelect'
import Forecast from '../Forecast'
import { Location } from '../../api/location'

import styles from './App.module.css'

const App: React.FC = () => {

  const [location, setLocation] = React.useState<Location | null>(null)

  return <div className={styles.container}>
    <div className={styles.form}>
      <span>What's the weather in</span>
      <LocationSelect onSelect={(value: Location) => setLocation(value)} />
      <span>?</span>
    </div>
    <Forecast location={location} />
  </div>
}

export default App
