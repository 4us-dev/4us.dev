import { createStyles, makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
  })
)
export default useStyles
