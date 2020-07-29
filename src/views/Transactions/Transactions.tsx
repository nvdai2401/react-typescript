import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { DateRangeBar } from './components'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    maxHeight: 'calc(100vh - 130px)',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 72,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  [theme.breakpoints.up('md')]: {},
}))

const Transactions: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DateRangeBar />
    </div>
  )
}

export default Transactions
