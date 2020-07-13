import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { DateRangeBar, TotalTransaction, TransactionList } from './components'

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
    padding: '0 16px 16px',
  },
  [theme.breakpoints.up('md')]: {},
}))

export interface Props {
  name?: string
}

const Transactions: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DateRangeBar />
      <TotalTransaction />
      <TransactionList />
    </div>
  )
}

export default Transactions
