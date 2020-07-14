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
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.5),
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  container__icon__input: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    '& svg': {
      color: theme.palette.primary.main,
    },
  },
  item__input: {
    width: '90%',
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
  const [category, setCategory] = useState('')

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
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Box className={classes.container__icon__input}>
              <MonetizationOnIcon />
              <TextField
                label="Amount"
                type="number"
                className={classes.item__input}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.container__icon__input}>
              <MonetizationOnIcon />
              <FormControl className={classes.item__input}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
                    setCategory(event.target.value as string)
                  }
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  )
}

export default AddTransactionDialog
