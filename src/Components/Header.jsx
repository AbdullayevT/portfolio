import React from "react";
import logo from "@/assets/logo.svg";
import "@/assets/hamburger.css";
import { Button, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import { setIsActive } from "../features/hamburger";
import Contact from "./Buttons/Contact";
import HeaderButtons from "./Buttons/HeaderButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import {motion} from "framer-motion"
import { useLocation } from "react-router-dom";

export default function Header() {
  const { isActive } = useSelector((state) => state.hamburger);
  const location = useLocation()
  const dispatch = useDispatch();
  const onChangeHamburger = (value) => {
    dispatch(setIsActive(value));
  };
  const { t, i18n } = useTranslation();

  const items = [
    {
      label: <HeaderButtons text={"About"} action={"about"} />,
      key: "0",
    },
    {
      label: <HeaderButtons text={"work"} action={"work"} />,
      key: "1",
    },
    {
      label: <HeaderButtons text={"portfolio"} action={"portfolio"} />,
      key: "2",
    },
    {
      label: <Contact btnText={t("contact")} />,
      key: "3",
    },
  ];
  const languages = [
    {
      label: (
        <Button type="text" className="hover:!bg-transparent">
          Azerbaijan
        </Button>
      ),
      key: "az",
    },
    {
      label: (
        <Button type="text" className="hover:!bg-transparent">
          Russian
        </Button>
      ),
      key: "ru",
    },
    {
      label: (
        <Button type="text" className="hover:!bg-transparent">
          English
        </Button>
      ),
      key: "en",
    },
  ];
  const imgVariants = {
    hidden: {
      rotate: -180
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 2
      }
    }
  }
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        dispatch(setIsActive(false));
      }}
    >
      <div className="text-white px-[5%]">
        <div className="w-full max-w-[75rem] min-[1920px]:max-w-[85rem] flex justify-between items-center mx-auto py-4">
          <div className="left flex gap-4 place-items-center w-full font-bold text-xl lg:text-2xl m-5 ml-0" onClick={() => {window.location.href = location.pathname}}>
            <motion.span variants={imgVariants} initial="hidden" animate="visible">
              <img src={logo} />
            </motion.span>
            {t("me")}
          </div>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            overlayStyle={{
              marginTop: "55px",
            }}
          >
            <div
              className="three col lg:!hidden z-10"
              onClick={() => {
                onChangeHamburger(!isActive);
              }}
            >
              <div
                className={`hamburger ${isActive && "is-active"}`}
                id="hamburger-11"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </Dropdown>
          <div className="right lg:flex align-middle items-center gap-8 lg;block hidden">
            <div className="flex pr-2 justify-center align-middle gap-2">
              <HeaderButtons text={"about"} action={"about"} />
              <HeaderButtons text={"work"} action={"work"} />
              <HeaderButtons text={"portfolio"} action={"portfolio"} />
            </div>
            <div className="flex py-[9px] px-[17px] items-start justify-center">
              <Contact btnText={t("contact")} />
            </div>
          </div>
          <Dropdown
            menu={{
              onClick: (a) => {
                i18n.changeLanguage(a.key);
              },
              items: languages,
            }}
            placement="topRight"
            trigger={"click"}
          >
            <Button
              className="text-white hover:!bg-transparent hover:!text-white ml-6"
              size="large"
              type="text"
              icon={<FontAwesomeIcon icon={faLanguage} size="xl" />}
            />
          </Dropdown>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
