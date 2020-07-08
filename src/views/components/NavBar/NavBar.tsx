import React from 'react'
import { Box, Button, Grid } from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import AssessmentIcon from '@material-ui/icons/Assessment'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

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
      color: '#511378',
    },
  },
  active: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
}))

export interface Props {
  name?: string
}

const NavBar: React.FC<Props> = () => {
  const classes = styles()

  const handleOnChangePage = () => {}
  return (
    <Grid className={classes.root}>
      <Button
        color="primary"
        className={classes.tab}
        onClick={() => handleOnChangePage()}
      >
        <MenuIcon />
      </Button>
      <Button
        color="primary"
        className={classes.tab}
        onClick={() => handleOnChangePage()}
      >
        <AccountBalanceWalletIcon />
        <span>Transactions</span>
      </Button>
      <Button
        color="primary"
        className={classes.tab}
        onClick={() => handleOnChangePage()}
      >
        <AssessmentIcon />
        <span>Report</span>
      </Button>
      <Button
        color="primary"
        className={classes.tab}
        onClick={() => handleOnChangePage()}
      >
        <AccountBalanceIcon />
        <span>Budget</span>
      </Button>
    </Grid>
  )
}

export default NavBar
