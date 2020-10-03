import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
    },
  })
)

export default useStyles
