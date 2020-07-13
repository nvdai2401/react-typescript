import React, { useState } from 'react'
import { Grid, Button, Tabs, Tab, Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {},
  [theme.breakpoints.up('md')]: {},
}))

export interface Props {
  name?: string
}

const TransactionList: React.FC<Props> = () => {
  const classes = useStyles()
  const [value, setValue] = useState(1)

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }
  return <div className={classes.root}></div>
}

export default TransactionList
