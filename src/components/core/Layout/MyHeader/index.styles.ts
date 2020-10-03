import { createStyles, makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(-2),
    },
    title: {
      flexGrow: 1,
    },
    titleLink: {
      color: "white",
    },
  })
)

export default useStyles
