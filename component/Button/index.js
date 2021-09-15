import React from 'react'
import styles from '../../styles/Home.module.css'

const index = ({ onClick, children }) => {
  return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
  )
}

export default index
