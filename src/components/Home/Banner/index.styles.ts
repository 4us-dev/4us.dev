import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: `linear-gradient(140deg, #333333 0%, ${theme.palette.primary.main} 50%, #333333 100%)`,
    padding: theme.spacing(8, 0, 6),
    color: "white",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;
