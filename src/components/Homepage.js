import React, { useState } from "react";
import { AppBar, Button, List, ListItem, Toolbar } from "react95";
import Auth from "./Auth";

export default function Homepage() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        background: "lightgrey",
        borderStyle: "solid",
        borderWidth: "2px",
        borderLeftColor: "grey",
        borderTopColor: "grey",
        borderBottomColor: "whitesmoke",
        borderRightColor: "whitesmoke",
        height: 40,
        width: "100%",
      }}
    >
      <Menu />
    </div>
  );
}

function Menu() {
  const [open, setOpen] = useState(false);

  const startOnClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleClose = () => setOpen(false);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {open && (
        <List
          horizontalAlign="left"
          verticalAlign="top"
          open={open}
          onClick={handleClose}
        >
          <ListItem disabled>Chat</ListItem>
          <ListItem>Minecraft</ListItem>
          <ListItem>Calculator</ListItem>
          <Auth />
        </List>
      )}
      <Button
        onClick={startOnClick}
        active={open}
        style={{ fontWeight: "bold" }}
        style={{ height: "100%", width: "110px" }}
      >
        Start
      </Button>
    </div>
  );
}
