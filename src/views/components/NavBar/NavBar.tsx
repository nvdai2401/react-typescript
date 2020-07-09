import React, { useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import clsx from 'clsx'

import { Button, Grid } from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import AssessmentIcon from '@material-ui/icons/Assessment'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

import { NavBarItem } from './components'

const styles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100vh',
    width: 80,
    boxShadow: '0 3px 7px 0 rgba(0,0,0,.27)',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  tab: {
    position: 'relative',
    color: theme.palette.grey[400],
    width: '100%',
    cursor: 'pointer',
    padding: `16px 12px`,
    textTransform: 'capitalize',
    borderRadius: 0,
    '&>span': {
      display: 'flex',
      flexDirection: 'column',
      fontSize: 12,
      fontWeight: 500,
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  active: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
}))

const routes = [
  {
    path: '/',
    title: 'Transactions',
    icon: <AccountBalanceWalletIcon />,
  },
  {
    path: '/report',
    title: 'Report',
    icon: <AssessmentIcon />,
  },
  {
    path: '/budget',
    title: 'Budget',
    icon: <AccountBalanceIcon />,
  },
]

const NavBar = (props: RouteComponentProps<any>) => {
  const classes = styles()
  const { location, history } = props
  const [currentRoute, setCurrentRoute] = useState(location.pathname || {})

  const handleOnChangeRoute = (path: string): void => {
    setCurrentRoute(path)
    history.push(path)
  }
  const setActiveTab = (path: string): any => {
    return currentRoute === path ? classes.active : ''
  }
  return (
    <Grid className={classes.root}>
      <Button className={classes.tab}>
        <MenuIcon />
      </Button>
      {routes.map((route, index) => (
        <NavBarItem
          key={index}
          styles={clsx(classes.tab, setActiveTab(route.path))}
          title={route.title}
          icon={route.icon}
          handleOnClick={() => handleOnChangeRoute(route.path)}
        />
      ))}
    </Grid>
  )
}

export default withRouter(NavBar)
