import React from "react";
import { render } from "react-dom";
//import Button from "@material-ui/core/Button";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  return (
    <>
      <Button
        sx={{
          width: "270px",
          height: "270px",
          borderRadius: "50% !important"
        }}
        color="success"
        variant="contained"
      >
        <MenuIcon
          sx={{
            width: "90% !important",
            height: "90% !important"
          }}
        />
      </Button>
    </>
  );
};

render(<App />, document.getElementById("root"));
