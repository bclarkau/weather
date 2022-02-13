import React from 'react'
import cn from 'classnames'

import { Weather } from '../../api/forecast'
import { formatDateLong, formatCelcius } from '../../helpers'

import styles from './CurrentWeather.module.css'

type CurrentWeatherProps = Weather

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ date, temperature, description, icon }) => {
  return <div>
    <div className={styles.date}>{formatDateLong(date)}</div>
    <div className={styles.weather}>
      <img className={styles.icon} src={icon} alt={description} title={description} />
      <div className={styles.temperature}>
        <div className={styles.now}>
          <div className={styles.temp}>{formatCelcius(temperature.now)}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.other}>
          <div className={styles.min}>Min {formatCelcius(temperature.min)}</div>
          <div className={styles.max}>Max {formatCelcius(temperature.max)}</div>
        </div>
      </div>
    </div>
  </div>
}

export default CurrentWeather