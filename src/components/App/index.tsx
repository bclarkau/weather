import React from 'react'
import cn from 'classnames'

import LocationSelect from '../LocationSelect'
import Forecast from '../Forecast'
import { Location } from '../../api/location'

import styles from './App.module.css'

const App: React.FC = () => {

  const [location, setLocation] = React.useState<Location | null>(null)

  const handleSelect = React.useCallback((value: Location | null) => setLocation(value), [setLocation])

  return <div className={styles.container}>
    <div className={cn(styles.form, { [styles.submitted] : !!location })}>
      <span>What's the weather in</span>
      <LocationSelect onSelect={handleSelect} />
      <span>?</span>
    </div>
    <Forecast location={location} />
  </div>
}

export default App
