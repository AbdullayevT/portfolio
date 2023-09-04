import React from "react";
import { isMobile } from "../utils/devices";
import logo from "@/assets/logo.svg";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { FacebookButton, InstagramButton, LinkedinButton } from "./Buttons/Social";

export default function Footer() {
  const style =
    "text-white border-none hover:!bg-transparent hover:!text-[#8566ff] ";
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center">
      <div
        className={`bg-[#111223] text-white w-full max-w-[85rem] ${
          isMobile() && "max-w-[85rem]"
        }`}
      >
        <div className="py-16">
          <div
            className={`w-full max-w-[35rem] gap-x-16 gap-y-16 grid-rows-[auto] grid-cols-[auto] auto-cols-[1fr] justify-center justify-items-center grid mx-auto`}
          >
            <div className="flex gap-4 place-items-center w-full font-bold text-xl lg:text-2xl">
              <span>
                <img src={logo} />
              </span>
              Tapdig Abdullayev
            </div>
            <div className="flex gap-x-4 gap-y-4 items-center">
              <LinkedinButton />
              <FacebookButton />
              <InstagramButton />
            </div>
          </div>
        </div>
        <div className="justify-center items-center flex py-10 border-t-[rgba(133,102,255,0.32)] border-t border-solid">
          © 2023 {t("footerMessage")}
        </div>
      </div>
    </div>
  );
}
