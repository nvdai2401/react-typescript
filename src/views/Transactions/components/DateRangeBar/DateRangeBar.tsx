import React, { useState } from 'react'
import { AppBar, Box, Tabs, Tab, Typography, Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import { TransactionsContent } from 'views/Transactions/components/'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
  },
  tabsContainer: {
    backgroundColor: theme.palette.common.white,
  },
  [theme.breakpoints.up('md')]: {},
}))

export interface Props {
  name?: string
}

function a11yProps(index: number) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const transactionList = [
  { id: '1', label: 'Item One' },
  { id: '2', label: 'Item Two' },
  { id: '3', label: 'Item Three' },
  { id: '4', label: 'Item Four' },
  { id: '5', label: 'Item Five' },
  { id: '6', label: 'Item Six' },
]

const DateRangeBar: React.FC<Props> = () => {
  const classes = useStyles()
  const [value, setValue] = useState(5)

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.tabsContainer}
          onChange={handleChange}
        >
          {transactionList.map((item, index) => (
            <Tab key={item.id} label={item.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      {transactionList.map((item, index) => (
        <TransactionsContent key={item.id} index={index}>
          {item.label}
        </TransactionsContent>
      ))}
    </div>
  )
}

export default DateRangeBar
