import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface ToolBarProps {
  styles: any
  title: string
  icon?: JSX.Element
  handleOnClick: () => void
}

const ToolBar: React.FC<ToolBarProps> = (props: ToolBarProps) => {
  const { title, styles, icon, handleOnClick } = props

  return <Grid></Grid>
}

export default ToolBar
