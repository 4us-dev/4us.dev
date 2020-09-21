import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}))

export default useStyles
