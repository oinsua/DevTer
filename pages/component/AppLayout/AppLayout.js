import React from 'react'
import styles from '../../../styles/Home.module.css'

const AppLayout = ({children}) => {
    return (
        <div className={styles.divApp}>
            <main className={styles.mainApp}>
              {children}
            </main>
        </div>
    )
}

export default AppLayout
