import React from "react"
import GuestPreview from "./GuestPreview"
import avatar01 from "../../../images/avatar/avatar-01.jpg"

export default {
  title: "Molecules/Guest",
  component: GuestPreview,
}

export const guestPreview = () => (
  <GuestPreview
    content="Based in Chincago. I love playing tennis and loud music."
    fullName="Bradley Hunter"
    imgSource={avatar01}
  />
)
