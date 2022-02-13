import React from 'react'

import { Weather } from '../../api/forecast'
import { formatDate, formatCelcius } from '../../helpers'

import styles from './FutureWeather.module.css'

type FutureWeatherProps = Weather

const FutureWeather: React.FC<FutureWeatherProps> = ({ date, temperature, description, icon }) => {
  return <>
		<div className={styles.date}>{formatDate(date)}</div>
    <img className={styles.icon} src={icon} alt={description} title={description} />
    <div className={styles.temperature}>{formatCelcius(temperature.min)} / {formatCelcius(temperature.max)}</div>
    <div className={styles.description}>{description}</div>
	</>
}

export default FutureWeather