import React, { useContext } from 'react'
import { Textfit } from 'react-textfit'
import { CalcContext } from '../context/CalcContext'

const styles = {
    view:{
        height:'4rem',
        marginBottom:'4rem',
    }
}

const View = () => {
    const {calc} = useContext(CalcContext)
  return (
    <Textfit style={styles.view} max={70}> {calc.num?calc.num:calc.res}</Textfit>
  )
}

export default View