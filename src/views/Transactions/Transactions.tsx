import React, { useState } from 'react'
import { Grid, Button, Tabs, Tab, Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    position: 'absolute',
    left: 0,
    top: 72,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {},
}))

export interface Props {
  name?: string
}

const Transactions: React.FC<Props> = () => {
  const classes = useStyles()
  const [value, setValue] = useState(2)

  const handleChange = (newValue: any) => {
    setValue(newValue)
  }
  return (
    <div className={classes.root}>
      <Grid>
        <Paper>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Active" />
            <Tab label="This month" />
            <Tab label="Active" />
          </Tabs>
        </Paper>
      </Grid>
    </div>
  )
}

export default Transactions
