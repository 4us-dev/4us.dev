import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import MailIcon from "@material-ui/icons/Mail"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import React from "react"
import Link from "../../Link"
import useStyles from "./index.styles"

export interface Props {
  onCloseMenu?: (event: any) => void
}

const menuList1 = [
  {
    title: "Home",
    icon: <InboxIcon />,
    link: "/",
  },
  {
    title: "Password Generator",
    icon: <MailIcon />,
    link: "/password_generator",
  },
  {
    title: "PKCE Generator",
    icon: <InboxIcon />,
    link: "/pkce_generator",
  },
]

const menuList2 = [
  {
    title: "About",
    icon: <InboxIcon />,
    link: "/about",
  },
]
const MyMenu: React.FC<Props> = ({ onCloseMenu }) => {
  const classes = useStyles()

  return (
    <div
      className={classes.root}
      role="presentation"
      onClick={onCloseMenu}
      onKeyDown={onCloseMenu}
    >
      <List>
        {menuList1.map((item, index) => (
          <Link href={item.link}>
            <ListItem button key={item.title}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {menuList2.map((item, index) => (
          <Link href={item.link}>
            <ListItem button key={item.title}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )
}

export default MyMenu
