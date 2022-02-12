import React from 'react'
import cn from 'classnames'

import { Weather, WeatherForecast, getForecast } from '../../api/forecast'
import { Location } from '../../api/location'
import ForecastItem from './ForecastItem'

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
    <div className={styles.current}>
      <h2>Currently</h2>
    </div>
    <div className={styles.upcoming}>
      <h2>5 Day Forecast</h2>
      <div className={styles.days}>
        {forecast?.map((day: Weather) => <ForecastItem key={day.date} {...day} />)}
      </div>
    </div>
  </div>
}

export default Forecast
