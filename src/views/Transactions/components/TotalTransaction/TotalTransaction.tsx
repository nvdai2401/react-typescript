import React, { useState } from 'react'
import { Grid, Button, Paper, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(1.5),
    borderLeft: 0,
    borderRight: 0,
  },
  item__transactionFlow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: theme.spacing(1),
    '& .MuiTypography-body2': {
      lineHeight: 2,
    },
  },
  [theme.breakpoints.up('md')]: {},
}))

export interface Props {
  name?: string
}

const TotalTransaction: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Paper elevation={0} square variant="outlined" className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.item__transactionFlow}>
          <Typography variant="body2" component="span">
            Inflow
          </Typography>
          <Typography variant="body2" component="span">
            100
          </Typography>
        </Grid>
        <Grid item className={classes.item__transactionFlow}>
          <Typography variant="body2" component="span">
            Outflow
          </Typography>
          <Typography variant="body2" component="span">
            1005
          </Typography>
        </Grid>
        <Button color="primary" variant="outlined" size="small">
          View report for this period
        </Button>
      </Grid>
    </Paper>
  )
}

export default TotalTransaction
