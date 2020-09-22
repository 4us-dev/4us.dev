import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    heroContent: {
      // backgroundImage: `linear-gradient(140deg, #333333 0%, ${theme.palette.primary.main} 50%, #333333 100%)`,
      backgroundImage: `url('/images/banner1.jpg')`,
      backgroundSize: "cover",
      padding: theme.spacing(12, 0, 0),
      color: "white",
    },
    heroTextContainer: {
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0) 0%, rgba(255,0,0,0) 100%)`,
      padding: theme.spacing(1, 0, 1),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
  })
)

export default useStyles
