import React from 'react'
import cn from 'classnames'

import { Location, getLocations, getDebouncedLocations } from '../../api/location'

import styles from './LocationSelect.module.css'
import Loading from '../Loading'

type LocationSelectProps = {
  onSelect: (value: Location | null) => void
}

const LocationSelect: React.FC<LocationSelectProps> = ({ onSelect }) => {

  const inputRef = React.useRef('')
  const [input, setInput] = React.useState('')
  const [locations, setLocations] = React.useState<Location[] | null>(null)
  const [loading, setLoading] = React.useState(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.innerHTML)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.stopPropagation()
      e.preventDefault()
    }
  }

  const handleSelect = (value: Location) => {
    onSelect(value)
    setInput(value.name)
    setLocations(null)
  }

  React.useEffect(() => {
    if(!input.length) {
      setLocations(null)
      onSelect(null)
    }
    
    (async () => {
      if(input.length > 2) {
        setLoading(true)
        const res = await getDebouncedLocations(input)
        setLocations(res)
        setLoading(false)
      }
    })()
  }, [input])

  return <div className={styles.wrapper}>

    <span 
      placeholder="City Name" 
      className={styles.input} 
      onInput={handleInput}
      onKeyPress={handleKeyPress}
      contentEditable 
      dangerouslySetInnerHTML={{ __html: inputRef.current }}
    />

    <div className={styles.loading}>
      <Loading active={loading} />
    </div>

    <ul className={cn(styles.chips, { [styles.active] : !!locations?.length })}>
      {locations?.map(location => <li key={location.id}>
        <button className={styles.chip} onClick={() => handleSelect(location)}>
          {location.name}, {location.country}
        </button>
      </li>)}
    </ul>

  </div>
}

export default LocationSelect