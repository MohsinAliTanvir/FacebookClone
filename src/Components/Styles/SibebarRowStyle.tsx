import { makeStyles } from "@material-ui/core";

export const SidebarRowStyle = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#eff2f5",
      borderRadius: "10px",
    },
    "& p": {
      marginLeft: "20px",
      fontWeight: "600",
    },
    "& .MuiSvgIcon-root": {
      color: "#2e81f4",
      fontSize: "xx-large",
    },
  },
});
