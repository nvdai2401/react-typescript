import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import {
  TotalTransaction,
  TransactionCard,
} from 'views/Transactions/components/'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 190px)',
    marginTop: 48,
    overflow: 'auto',
  },
  [theme.breakpoints.up('md')]: {},
}))

export interface Props {
  value: number
  index: number
  children?: React.ReactNode
}

const TransactionsContent: React.FC<Props> = (props: Props) => {
  const classes = useStyles()
  const { value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      className={classes.root}
    >
      {value === index && (
        <>
          <TotalTransaction />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </>
      )}
    </div>
  )
}

export default TransactionsContent
