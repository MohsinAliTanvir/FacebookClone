import React from "react";
import { Avatar, IconButton, Box } from "@material-ui/core";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  Flag as FlagIcon,
  SubscriptionsOutlined as SubscriptionsOutlinedIcon,
  StorefrontOutlined as StorefrontOutlinedIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  Add as AddIcon,
  Forum as ForumIcon,
  NotificationsActive as NotificationsActiveIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";

import { HeaderOption } from "../Styles/HeaderOption";
//import "./Header.css";

/*type Props = {
  name: string;
  title: string;
};*/

/*const useStyle = makeStyles(({ breakpoints }) => ({
  App: {
    color: "#FFFF",
    [breakpoints.down("md")]: {
      color: "red",
    },
  },
}));*/

const Header: React.FC = () => {
  const classes = HeaderOption();
  return (
    <Box
      display="flex"
      position="sticky"
      top="0"
      bgcolor="#fff"
      p="10px"
      boxShadow="0px 5px 8px -9px rgba(0,0,0,0.75)"
      zIndex={100}
    >
      <Box display="flex" height={50} p="5px">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/64px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook logo"
        />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        bgcolor="#eff2f5" //Exact color that fb uses for its input elements
        p="5px 16px"
        ml="10px"
        borderRadius="40px"
      >
        <SearchIcon /> {/*Icon is from the material ui library */}
        <input
          style={{ border: "none" }}
          placeholder="Search Facebook"
          type="Text"
        />
      </Box>

      <Box display="flex" flex={1} justifyContent="center">
        <div className={classes.root}>
          <HomeIcon fontSize="large" />
        </div>
        <div className={classes.root}>
          <FlagIcon fontSize="large" />
        </div>
        <div className={classes.root}>
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className={classes.root}>
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className={classes.root}>
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </Box>

      <Box display="flex">
        <Box display="flex" alignItems="center">
          <Avatar />
          <Box ml={2}>
            <h4>Mohsin</h4>
          </Box>
        </Box>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
