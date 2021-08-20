import { makeStyles } from "@material-ui/core";

export const StoryStyle = makeStyles({
  root: {
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "120px",
    height: "200px",
    boxShadow: "0px 5px 17px -7px rgba(0,0,0,0.75)",
    marginRight: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "transform 100ms ease-in",
    "&:hover": {
      transform: "scale(1.07)",
    },
    "& h4": {
      position: "absolute",
      color: "white",
      bottom: "20px",
      left: "20px",
    },
  },

  storyAvatar: {
    margin: "10px",
    border: "5px solid #2e81f4",
  },
});
