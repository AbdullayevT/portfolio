import React, { useEffect, useRef } from "react";
import { isMobile } from "../utils/devices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faFolder } from "@fortawesome/free-solid-svg-icons";
import { aboutDetailInfo } from "../utils/variables";
import Contact from "../Components/Buttons/Contact";
import { useDispatch, useSelector } from "react-redux";
import { setGetWork } from "../features/general";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function AboutDetail() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { getWork } = useSelector((state) => state.general);
  useEffect(() => {
    getWork && ref.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(setGetWork(false));
  }, [getWork]);
  const boxVariants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemsVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <div
      className={` w-full my-auto ${isMobile() && "max-w-[85rem]"}`}
      ref={ref}
    >
      <motion.div className={`py-[8rem] ${isMobile() && "py-[2rem]"}`}>
        <div
          className={`gap-x-16 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] grid relative rounded-[30px] ${
            isMobile() && "!grid-cols-[1fr] px-[5%]"
          }`}
        >
          <motion.div
            className={`flex-col items-start flex sticky ${
              isMobile() && "!static"
            } top-8`}
            variants={boxVariants}
            whileInView="visible"
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <p className="text-[#00d1e8] text-lg font-mono font-normal">
              {t("servicesTitle")}
            </p>
            <div className="w-full h-8" />
            <h2
              className={`text-[3rem] font-semibold leading-[1.25] tracking-tight ${
                isMobile() && "text-[2.25rem]"
              }`}
            >
              {t("servicesDesc")}
            </h2>
            <div className="w-full h-8" />
            <Contact btnText={t("getInTouch")} />
          </motion.div>
          <motion.div
            className="flex-col flex relative rounded-[30px]"
            variants={itemsVariants}
            whileInView="visible"
            initial="hidden"
          >
            {aboutDetailInfo.map((item, index) => {
              return (
                <motion.div
                  className={`${item.top} bg-[#111223] flex-col flex sticky`}
                  key={index}
                  variants={itemsVariants}
                  custom={index + 1}
                  whileInView="visible"
                  initial="hidden"
                >
                  <div className="gap-x-3 gap-y-3 bg-[rgba(133,102,255,0.04)] border items-center flex px-4 py-2 rounded-xl border-solid border-[rgba(133,102,255,0.32)]">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ color: "#8566ff" }}
                    />
                    <FontAwesomeIcon
                      icon={faFolder}
                      style={{ color: "#8566ff" }}
                    />
                    <div className="text-[#8566ff] font-mono text-lg">
                      {t(item.title)}
                    </div>
                  </div>
                  <div className="w-full gap-x-0 gap-y-0 justify-start items-start flex pl-[3.25rem] pr-6 py-6">
                    <div className="text-[#b8b7dc]">{t(item.content)}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
