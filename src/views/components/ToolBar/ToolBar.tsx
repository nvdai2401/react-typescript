import React from 'react'
import clsx from 'clsx'
import { Grid, Box, Button, IconButton } from '@material-ui/core'
import EventNoteIcon from '@material-ui/icons/EventNote'
import SearchIcon from '@material-ui/icons/Search'
import VisibilityIcon from '@material-ui/icons/Visibility'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import NotificationsIcon from '@material-ui/icons/Notifications'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 64,
    position: 'fixed',
    top: 0,
    zIndex: 2,
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 1px 0 0 rgba(0,0,0,.12)',
  },
  [theme.breakpoints.up('md')]: {},
}))

interface ToolBarProps {
  // styles: any
  // title: string
  // icon?: JSX.Element
  // handleOnClick: () => void
}

const ToolBar: React.FC<ToolBarProps> = (props: ToolBarProps) => {
  // const { title, styles, icon, handleOnClick } = props
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item>Total: 500</Grid>
      <Grid item>Select time range</Grid>
      <Grid item>
        <IconButton>
          <EventNoteIcon />
        </IconButton>
        <IconButton>
          <VisibilityIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item>Button</Grid>
    </Grid>
  )
}

export default ToolBar
