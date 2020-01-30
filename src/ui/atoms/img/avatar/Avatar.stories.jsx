import React from "react"
import Avatar from "./Avatar"
import avatar01 from "../../../../images/avatar/avatar-01.jpg"

export default {
  title: "Atoms/Img/Avatar",
  component: Avatar,
}

export const small = () => <Avatar imgSource={avatar01} />
