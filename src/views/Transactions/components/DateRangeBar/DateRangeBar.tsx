import React, { useState } from 'react'
import { Tabs, Tab, Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
  },
  [theme.breakpoints.up('md')]: {},
}))

export interface Props {
  name?: string
}

const DateRangeBar: React.FC<Props> = () => {
  const classes = useStyles()
  const [value, setValue] = useState(1)

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Last month" />
        <Tab label="This month" />
        <Tab label="Future" />
      </Tabs>
    </Paper>
  )
}

export default DateRangeBar
