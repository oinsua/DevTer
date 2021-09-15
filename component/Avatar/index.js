import React from 'react'
import styles from '../../styles/Home.module.css'

const index = ({ src, alt, email }) => {
  return (
        <div className={styles.avatar}>
          <img src={src} alt={alt} title={alt} className={styles.img} />
          <h5>{email}</h5>
        </div>
  )
}

export default index
