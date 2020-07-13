import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
  value: number
  index: number
}

const TransactionsContent: React.FC = (props: any) => {
  const classes = useStyles()
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

export default TransactionsContent
