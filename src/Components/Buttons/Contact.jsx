import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { setGetContact } from "../../features/general";

export default function Contact({ btnText }) {
  const dispatch = useDispatch()
  return (
    <Button
      type="text"
      className="text-[rgb(0,209,232)] !rounded-[5rem] py-[0.5rem] px-[1rem] bg-[#00d1e80a] hover:!bg-[#00D1E8]"
      size="large"
      onClick={() => {dispatch(setGetContact(true))}}
    >
      {btnText}
    </Button>
  );
}
