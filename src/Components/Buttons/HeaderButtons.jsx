import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGetAbout,
  setGetPortfolio,
  setGetWork,
} from "../../features/general";
import { useTranslation } from "react-i18next";

export default function HeaderButtons({ text, action }) {
  const { isActive } = useSelector((state) => state.hamburger);
  const style = "text-white hover:!bg-transparent hover:!text-[#8566ff] ";
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const handleOnClick = () => {
    if (action === "about") {
      dispatch(setGetAbout(true));
    }
    if (action === "work") {
      dispatch(setGetWork(true));
    }
    if (action === "portfolio") {
      dispatch(setGetPortfolio(true));
    }
  };
  return (
    <Button
      type="text"
      className={!isActive && style}
      size="large"
      onClick={handleOnClick}
    >
      {t(text)}
    </Button>
  );
}
