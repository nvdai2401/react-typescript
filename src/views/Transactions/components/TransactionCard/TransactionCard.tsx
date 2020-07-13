import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { TransactionItem } from 'views/Transactions/components/'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5),
  },
  header: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(1.5),
  },
  amountExpense: {
    textAlign: 'right',
    fontWeight: 700,
  },
  [theme.breakpoints.up('md')]: {},
}))

interface Props {}

const TransactionCard: React.FC<Props> = (props: Props) => {
  const classes = useStyles()

  return (
    <Paper elevation={3} square className={classes.root}>
      <Grid container justify="space-between" className={classes.header}>
        <Grid item xs={2}>
          12
        </Grid>
        <Grid item xs={6}>
          Time
        </Grid>
        <Grid item xs={4} className={classes.amountExpense}>
          Expense
        </Grid>
      </Grid>
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
      <TransactionItem />
    </Paper>
  )
}

export default TransactionCard
