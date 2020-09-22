import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      transition: "0.1s",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  })
)

export default useStyles
