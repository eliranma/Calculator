import React from 'react'

const styles = {
    buttonsContainer:{
        display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        gap: '0.5rem'
    }
}


const ButtonsContainer = ({children}) => {
  return (
    <div style={styles.buttonsContainer}>{children}</div>
  )
}

export default ButtonsContainer