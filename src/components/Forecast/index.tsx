import React from 'react'
import cn from 'classnames'

import { Weather, WeatherForecast, getForecast } from '../../api/forecast'
import { Location } from '../../api/location'
import CurrentWeather from './CurrentWeather'
import FutureWeather from './FutureWeather'

import styles from './Forecast.module.css'

type ForecastProps = {
  location: Location | null
}

const Forecast: React.FC<ForecastProps> = ({ location }) => {

  const [forecast, setForecast] = React.useState<WeatherForecast | null>(null)

  React.useEffect(() => {
    (async () => {
      if (location) {
        const res = await getForecast(location)
        console.log('forecast', res)
        setForecast(res)
      }
    })()
  }, [location])

  return <div className={cn(styles.forecast, { [styles.active] : location })}>
    <div className={styles.column}>
      <h2>Currently</h2>
      {forecast && <CurrentWeather {...forecast.current} />}
    </div>
    <div className={styles.column}>
      <h2>Forecast</h2>
      <div className={styles.days}>
        {forecast?.forecast.map((day: Weather) => <FutureWeather key={day.date} {...day} />)}
      </div>
    </div>
  </div>
}

export default Forecast
