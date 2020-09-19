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
    list: {
      width: 250,
    },
  })
)

export default useStyles
