import { Avatar, Input, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import {
  Videocam as VideocamIcon,
  PhotoLibrary as PhotoLibraryIcon,
  InsertEmoticon as InsertEmoticonIcon,
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginTop: "30px",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0px 5px 7px -7px rgb(0,0,0,0.75)",
    width: "100%",
  },
  top: {
    display: "flex",
    padding: "15px",
    borderBottom: "1px solid #eff2f5",
    "& form": {
      flex: 1,
      display: "flex",
      "& input": {
        outlineWidth: 0,
        border: "none",
        padding: "5px 20px",
        margin: "0 10px",
        borderRadius: "999px",
        backgroundColor: "#eff2f5",
      },
      "& button": {
        height: 0,
        width: 0,
        backgroundColor: "transparent",
        color: "transparent",
        border: "none",
      },
    },
  },
  file_selector: {
    width: "20%",
  },
  message_input: {
    flex: 1,
  },
  bottom: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  option: {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    color: "gray",
    margin: "5px",
    "& h3": { fontSize: "medium", marginLeft: "10px" },
    "&:hover": { backgroundColor: "#eff2f5", borderRadius: "20px" },
  },
});

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e: any) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting!!!");
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Legotorch.png" />
        <form>
          <input
            type="text"
            className={classes.message_input}
            placeholder="Whats on your mind?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className={classes.file_selector}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className={classes.bottom}>
        <div className={classes.option}>
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className={classes.option}>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className={classes.option}>
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
