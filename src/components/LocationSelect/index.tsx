import React from 'react'

import { Location, getLocations } from '../../api/location'

import styles from './LocationSelect.module.css'

type LocationSelectProps = {
  onSelect: (value: Location) => void
}

const LocationSelect: React.FC<LocationSelectProps> = ({ onSelect }) => {

  const [input, setInput] = React.useState('')
  const [locations, setLocations] = React.useState<Location[] | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (input.length > 0) {
      const res = await getLocations(input)
      console.log('locations', res)
      setLocations(res)
    }
  }

  return <div>
    <form className={styles.location} onSubmit={handleSubmit}>
      <input type="text" name="location" onChange={e => setInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    <ul>
      {locations?.map(location => <li key={location.id}>
        <button onClick={() => onSelect(location)}>
          <div>{location.name}</div>
          <div>{location.coord.lat}</div>
          <div>{location.coord.lon}</div>
        </button>
      </li>)}
    </ul>
  </div>
}

export default LocationSelect