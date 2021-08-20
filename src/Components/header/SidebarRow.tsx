import React from "react";
import { Avatar } from "@material-ui/core";
import { SidebarRowStyle } from "../Styles/SibebarRowStyle";

type Props = {
  src?: string;
  Icon?: any;
  title: string;
};

const SidebarRow = ({ src, Icon, title }: Props) => {
  const classes = SidebarRowStyle();
  return (
    <div className={classes.root}>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
};

export default SidebarRow;
