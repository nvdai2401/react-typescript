import React from 'react'
import { Grid, Button, IconButton } from '@material-ui/core'
import EventNoteIcon from '@material-ui/icons/EventNote'
import SearchIcon from '@material-ui/icons/Search'
import VisibilityIcon from '@material-ui/icons/Visibility'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 72,
    position: 'fixed',
    top: 0,
    zIndex: 2,
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 1px 0 0 rgba(0,0,0,.12)',
    padding: theme.spacing(1.5),
  },
  item__total: {},
  item__tools: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  add_transactions__button: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    more_button: {
      display: 'none',
    },
    add_transactions__button: {
      display: 'inline-block',
    },
  },
}))

const ToolBar: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item xs={5} className={classes.item__total}>
        Total: 500
      </Grid>
      <Grid item xs={7} className={classes.item__tools}>
        <IconButton>
          <EventNoteIcon />
        </IconButton>
        <IconButton>
          <VisibilityIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton className={classes.more_button}>
          <MoreVertIcon />
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          className={classes.add_transactions__button}
        >
          Add Transactions
        </Button>
      </Grid>
    </Grid>
  )
}

export default ToolBar
