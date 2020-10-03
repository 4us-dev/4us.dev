import { Drawer, IconButton } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import React from "react"
import Link from "../../Link"
import MyMenu from "../MyMenu"
import useStyles from "./index.styles"

const MyHeader = (): JSX.Element => {
  const classes = useStyles()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setMenuOpen(open)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" className={classes.titleLink}>
              {process.env.NEXT_PUBLIC_APP_NAME}
              {process.env.NEXT_PUBLIC_APP_ENV !== "production" &&
                ` - ${process.env.NEXT_PUBLIC_APP_ENV}`}
            </Link>
          </Typography>
          <IconButton
            // edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={toggleDrawer(false)} anchor="right">
        <MyMenu onCloseMenu={toggleDrawer(false)} />
      </Drawer>
    </div>
  )
}

export default MyHeader
