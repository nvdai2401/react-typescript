import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  Button,
  Paper,
  Typography,
  Dialog,
  Divider,
  IconButton,
  Slide,
  TextField,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(1.5),
    borderLeft: 0,
    borderRight: 0,
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  [theme.breakpoints.up('md')]: {},
}))

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export interface Props {
  open: boolean
  onClose: () => void
}

const AddTransactionDialog: React.FC<Props> = (props: Props) => {
  const classes = useStyles()

  const { open, onClose } = props

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Add transaction
          </Typography>
          <Button autoFocus color="inherit" onClick={onClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <div>
              <MonetizationOnIcon />
              <TextField id="input-with-icon-grid" label="With a grid" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  )
}

export default AddTransactionDialog
