import React, { useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    flexWrap: 'nowrap',
    backgroundColor: theme.palette.background.paper,
    padding: '100px 16px',
  },
  item__inputGroup: {
    width: '100%',
  },
  item__input: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  item__groupButton: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: theme.spacing(2),
  },
  googleButton: {
    marginTop: theme.spacing(1.5),
    backgroundColor: 'rgb(66, 133, 244)',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: theme.palette.secondary.light,
    marginTop: theme.spacing(1),
    cursor: 'pointer',
    fontWeight: 600,
    lineHeight: 1,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  suggestion: {
    marginTop: theme.spacing(2),
    cursor: 'pointer',
    fontWeight: 600,
    '& span': {
      color: theme.palette.secondary.light,
      textDecoration: 'underline',
    },
  },
  [theme.breakpoints.up('md')]: {
    root: {
      margin: '200px auto',
      width: 400,
      height: 'auto',
      padding: theme.spacing(2),
      borderRadius: 4,
    },
  },
}))

const Auth: React.FC<any> = () => {
  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [screen, setScreen] = useState('sign-in')
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="h4">
        <Box fontWeight={600}>
          {screen === 'sign-in' ? 'Sign In' : 'Register'}
        </Box>
      </Typography>
      <Grid item className={classes.item__inputGroup}>
        <TextField
          label="Email"
          type="email"
          value={email}
          className={classes.item__input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          className={classes.item__input}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      {screen === 'sign-in' ? (
        <Typography variant="subtitle1" className={classes.forgotPassword}>
          Forgot password
        </Typography>
      ) : null}
      <Grid item className={classes.item__groupButton}>
        <Button variant="contained" color="primary" size="large">
          Sign In
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.googleButton}
        >
          Connect with Google
        </Button>
      </Grid>
      {screen === 'sign-in' ? (
        <Typography variant="subtitle1" className={classes.suggestion}>
          Don’t have an account?{' '}
          <span onClick={() => setScreen('sign-up')}>Register</span>
        </Typography>
      ) : (
        <Typography variant="subtitle1" className={classes.suggestion}>
          Have you an account?{' '}
          <span onClick={() => setScreen('sign-in')}>Sign In</span>
        </Typography>
      )}
    </Grid>
  )
}

export default Auth
