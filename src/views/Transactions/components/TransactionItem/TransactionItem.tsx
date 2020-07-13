import React from 'react'
import { Avatar, Grid, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1.5),
  },
  item__icon: {
    display: 'flex',
    alignItems: 'center',
  },
  item__content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  categoryName: {
    fontWeight: 600,
    lineHeight: 1,
  },
  desc: {
    color: theme.palette.grey[600],
  },
  amountExpense: {
    textAlign: 'right',
    color: theme.palette.error.light,
    fontWeight: 500,
  },
  [theme.breakpoints.up('md')]: {},
}))

export interface Props {
  name?: string
}

const TransactionItem: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid container justify="space-between">
        <Grid item xs={2} className={classes.item__icon}>
          <Avatar
            alt="Remy Sharp"
            src="https://toppng.com/uploads/preview/money-bag-icon-euros-11563611108asiwijaguc.png"
          />
        </Grid>
        <Grid item xs={6} className={classes.item__content}>
          <Typography variant="subtitle1" className={classes.categoryName}>
            Fees and charge
          </Typography>
          <Typography
            variant="caption"
            component="span"
            className={classes.desc}
          >
            Go to Market
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.amountExpense}>
          -10000
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TransactionItem
