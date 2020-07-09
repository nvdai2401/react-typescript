import React, { useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import clsx from 'clsx'

import { Button, Grid } from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import AddIcon from '@material-ui/icons/Add'
import AssessmentIcon from '@material-ui/icons/Assessment'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  root: {
    boxShadow: '0 3px 7px 0 rgba(0,0,0,.27)',
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    height: 'auto',
    zIndex: 3,
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
    [theme.breakpoints.down('sm')]: {
      padding: '6px 0',
    },
  },
  menu_button: {
    display: 'none',
  },
  account_button: {},
  add_button: {
    minWidth: 40,
    height: 40,
    borderRadius: '50%',
  },
  active: {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.up('md')]: {
    root: {
      height: '100vh',
      width: 80,
      flexDirection: 'column',
    },
    add_button: {
      display: 'none',
    },
    menu_button: {
      display: 'block',
      height: 64,
    },
    account_button: {
      display: 'none',
    },
    active: {
      '&:hover': {
        backgroundColor: theme.palette.common.white,
      },
    },
  },
}))

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
      <Button className={clsx(classes.tab, classes.menu_button)}>
        <MenuIcon />
      </Button>
      <Button
        className={clsx(classes.tab, setActiveTab('/'))}
        onClick={() => handleOnChangeRoute('/')}
      >
        <AccountBalanceWalletIcon />
        <span>Transactions</span>
      </Button>
      <Button
        className={clsx(classes.tab, setActiveTab('/report'))}
        onClick={() => handleOnChangeRoute('/report')}
      >
        <AssessmentIcon />
        <span>Report</span>
      </Button>
      <Button
        color="primary"
        variant="contained"
        className={classes.add_button}
      >
        <AddIcon />
      </Button>
      <Button
        className={clsx(classes.tab, setActiveTab('/budget'))}
        onClick={() => handleOnChangeRoute('/budget')}
      >
        <AccountBalanceIcon />
        <span>Budget</span>
      </Button>
      <Button className={clsx(classes.tab, classes.account_button)}>
        <PersonIcon />
        <span>Account</span>
      </Button>
    </Grid>
  )
}

export default withRouter(NavBar)
