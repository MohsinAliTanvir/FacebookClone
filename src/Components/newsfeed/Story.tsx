import React from "react";
import { Avatar } from "@material-ui/core";
import { StoryStyle } from "../Styles/StoryStyle";

type Props = {
  image: string;
  profileSrc: string;
  title: string;
};

const Story: React.FC<Props> = ({ image, profileSrc, title }: Props) => {
  const classes = StoryStyle();
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={classes.root}>
      <Avatar src={profileSrc} className={classes.storyAvatar} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
