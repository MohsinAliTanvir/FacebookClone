import React from "react";

import {
  LocalHospital as LocalHospitalIcon,
  EmojiFlags as EmojiFlagsIcon,
  People as PeopleIcon,
  Chat as ChatIcon,
  Storefront as StorefrontIcon,
  VideoLibrary as VideoLibraryIcon,
  ExpandMoreOutlined as ExpandMoreOutlinedIcon,
} from "@material-ui/icons";
import { Box } from "@material-ui/core";
import SidebarRow from "./SidebarRow";
//import { useStateValue } from "../StateProvider";

const Sidebar = () => {
  return (
    <Box padding="25px 10px" flex="0.33">
      <SidebarRow
        src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Legotorch.png"
        title="Mohsin"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
    </Box>
  );
};

export default Sidebar;
