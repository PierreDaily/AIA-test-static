import React from "react"
import GuestPreviewList from "./GuestPreviewList"
import mockGuestList from "../../../data/guestListData"

export default {
  title: "Organisms/GuestPreviewList",
  component: GuestPreviewList,
}

export const guestPreviewList = () => (
  <GuestPreviewList
    data={mockGuestList}
    title="Meet a partner for your best holiday"
  />
)
