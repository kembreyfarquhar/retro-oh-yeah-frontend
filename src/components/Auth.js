import React from "react";
import { ListItem } from "react95";

export default function Auth() {
  const user_id = localStorage.getItem("retroohyeah_user_id");
  return (
    <div>
      {user_id ? <ListItem>Profile</ListItem> : <ListItem>Login</ListItem>}
    </div>
  );
}
