import React from 'react'

import { Weather, getWeatherImageSrc } from '../../api/forecast'
import { formatDateLong, formatCelcius, formatTime } from '../../helpers'

import styles from './CurrentWeather.module.css'

type CurrentWeatherProps = Weather

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ date, temperature, description, icon, sunrise, sunset }) => {
  return <div>
    <div className={styles.date}>{formatDateLong(date)}</div>
    <div className={styles.weather}>
      <img className={styles.icon} src={getWeatherImageSrc(icon)} alt={description} title={description} />
      <div className={styles.temperature}>
        <div className={styles.now}>
          <div className={styles.temp}>{formatCelcius(temperature.now)}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <dl className={styles.sun}>
          <dt>Sunrise</dt>
          <dd>{formatTime(sunrise)}</dd>
          <dt>Sunset</dt>
          <dd>{formatTime(sunset)}</dd>
        </dl>
      </div>
    </div>
  </div>
}

export default CurrentWeather