import React from 'react'
import { Button } from '@material-ui/core'

interface NavBarItemProps {
  styles: any
  title: string
  icon?: JSX.Element
  handleOnClick: () => void
}

const NavBarItem: React.FC<NavBarItemProps> = (props: NavBarItemProps) => {
  const { title, styles, icon, handleOnClick } = props

  return (
    <Button className={styles} onClick={handleOnClick}>
      {icon}
      <span>{title}</span>
    </Button>
  )
}

export default NavBarItem
