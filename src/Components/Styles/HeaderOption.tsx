import { makeStyles } from "@material-ui/core/styles";

export const HeaderOption = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "0 25px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#eff2f5",
      borderRadius: "10px",
      alignItems: "center",
      borderBottom: "none" /*Facebook blue: #2e81f4*/,
      padding: "0 25px",
      "& .MuiSvgIcon-root": {
        color: "#2e81f4",
      },
    },
    "&:active": {
      borderBottom: "4px solid #2e81f4",
    },
  },
});
