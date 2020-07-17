import 'date-fns'
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
  ListSubheader,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import TodayIcon from '@material-ui/icons/Today'
import NotesIcon from '@material-ui/icons/Notes'
import BallotIcon from '@material-ui/icons/Ballot'

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'

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
    marginTop: theme.spacing(1.5),
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
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  )

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

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
                defaultValue="0"
                label="Amount"
                type="number"
                className={classes.item__input}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.container__icon__input}>
              <BallotIcon />
              <FormControl className={classes.item__input}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
                    setCategory(event.target.value as string)
                  }
                >
                  <ListSubheader>Category 1</ListSubheader>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <ListSubheader>Category 2</ListSubheader>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                  <ListSubheader>Category 3</ListSubheader>
                  <MenuItem value={3}>Option 5</MenuItem>
                  <MenuItem value={4}>Option 6</MenuItem>
                  <ListSubheader>Category 4</ListSubheader>
                  <MenuItem value={3}>Option 7</MenuItem>
                  <MenuItem value={4}>Option 8</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.container__icon__input}>
              <AccountBalanceWalletIcon />
              <FormControl className={classes.item__input}>
                <InputLabel id="demo-simple-select-label">Wallet</InputLabel>
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
          <Grid item xs={12}>
            <Box className={classes.container__icon__input}>
              <TodayIcon />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  autoOk
                  label="Date"
                  format="dd/MM/yyyy"
                  clearable
                  disableFuture
                  value={selectedDate}
                  className={classes.item__input}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.container__icon__input}>
              <NotesIcon />
              <TextField label="Note" className={classes.item__input} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  )
}

export default AddTransactionDialog
