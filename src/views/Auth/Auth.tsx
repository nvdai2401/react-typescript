import React, { useState } from 'react'
import { Grid, Button, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    flexWrap: 'nowrap',
  },
  item__input: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {},
}))

const Auth: React.FC<any> = () => {
  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Grid item xs={12}>
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
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Login
        </Button>
        <Button variant="contained" color="secondary">
          Login with Google
        </Button>
      </Grid>
    </Grid>
  )
}

export default Auth
