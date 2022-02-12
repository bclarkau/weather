import React from 'react'
import cn from 'classnames'

import { Weather, WeatherForecast, getForecast } from '../../api/forecast'
import { Location } from '../../api/location'

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
    FORECAST HERE
    {location && <div>
      FORECAST FOR 
      <span>{location.name}</span>
      <span>{location.coord.lat}</span>
      <span>{location.coord.lon}</span>
    </div>}
    {forecast?.map((day: Weather) => <div>
      <div>{day.date}</div>
      <div>{day.temp}</div>
      <div>{day.weather.status}</div>
      <div>{day.weather.description}</div>
    </div>)}
  </div>
}

export default Forecast
