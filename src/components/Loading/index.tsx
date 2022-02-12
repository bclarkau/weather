import React from 'react'
import cn from 'classnames'

import styles from './Loading.module.css'

type LoadingProps = {
  active: boolean
}

const Loading: React.FC<LoadingProps> = ({ active }) => {
  return  <img 
    className={cn(styles.loading, { [styles.active]: active })}
    src="/loading.svg" 
    alt="Loading..." 
  />
}

export default Loading
