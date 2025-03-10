import React from 'react'
import Logo from '../../atom/Logo/Logo'
import Title from '../../atom/Title/Title'
import BlueButton from '../../atom/BlueButton/BlueButton'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Logo></Logo>

      <Title text="To Do List" size="10"></Title>

      <div>
        <a href=""><BlueButton text="Registrar" width="120" height="40"></BlueButton></a>
        
      </div>
    </div>
  )
}

export default NavBar
