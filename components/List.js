import React from 'react'
import styles from '../styles/Home.module.css'

const List = ({ list }) => {
  return (
    <div className={styles.grid}>
        {list.map(item => {
            return <div key={item.id}
             className={styles.card}>
                 {item.title}
             </div>
        })}
    </div>
  )
}

export default List