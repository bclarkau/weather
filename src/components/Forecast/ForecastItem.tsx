import React from 'react'
import cn from 'classnames'

import { Weather } from '../../api/forecast'
import { formatDate, formatTime, formatCelcius } from '../../helpers'

import styles from './Forecast.module.css'

type ForecastItemProps = Weather

const ForecastItem: React.FC<ForecastItemProps> = ({ date, hours }) => {
  return <div className={styles.day}>
		<div className={styles.date}>{formatDate(date)}</div>
    <div className={styles.hours}>
      {hours.map(({ time, temperature, icon, description }) => <div className={styles.hour} key={time}>
        <div className={styles.time}>{formatTime(time)}</div>
        <div className={styles.temperature}>{formatCelcius(temperature)}</div>
        <div className={styles.icon}>
          <img src={icon} alt={description} role="presentation" />
        </div>
        <div className={styles.description}>{description}</div>
      </div>)}
    </div>
	</div>
}

export default ForecastItem