import React from 'react'

const styles = {
    wrapper:{
        background:'#f6f8f9',
        width:'20rem',
        padding:'2rem',
        marginTop:'4rem',
        borderRadius:'1rem',
        boxShadow:'0px 9px 15px -3px rgba(0,0,0,0.1)'
    }
}


const Wrapper = ({children}) => {
  return (
    <div style={styles.wrapper}>
    {children}
    </div>
  )
}

export default Wrapper