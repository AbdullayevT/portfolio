import React, { useEffect, useRef } from "react";
import { isMobile } from "../utils/devices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { workDetails } from "../utils/variables";
import { useDispatch, useSelector } from "react-redux";
import { setGetPortfolio } from "../features/general";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const { Title } = Typography;
export default function Work() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { getPortfolio } = useSelector((state) => state.general);
  useEffect(() => {
    getPortfolio && ref.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(setGetPortfolio(false));
  }, [getPortfolio]);
  const boxVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const textVariant = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
      },
    },
  };
  const oddVariants = {
    hidden: {
      opacity: 0,
      x: 10,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.3,
      },
    }),
  };
  const evenVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.3 },
    }),
  };
  const itemTextVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
      },
    }),
  };
  return (
    <motion.div
      className={` w-full my-auto ${isMobile() && "max-w-[85rem]"}`}
      variants={boxVariant}
      ref={ref}
      initial="hidden"
      whileInView="visible"
    >
      <motion.div
        className="flex justify-center h-10 mb-20"
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
      >
        <Title className="!text-white">{t("projectTitle")}</Title>
      </motion.div>
      <div
        className={`gap-x-20 gap-y-20 grid-cols-[auto] auto-cols-[1fr] grid relative rounded-[30px] ${
          isMobile() && "!grid-cols-[1fr] px-[5%]"
        }`}
      >
        {workDetails.map((item, index) => {
          return (
            <motion.div
              className={`w-full flex ${item.item === "odd" && "justify-end"}`}
              key={index}
              variants={item.item === "odd" ? oddVariants : evenVariants}
              initial="hidden"
              whileInView="visible"
              custom={index + 1}
            >
              <div className="w-full max-w-[42rem] flex flex-col">
                <div className="w-full rounded-3xl relative ">
                  <div>
                    <img src={item.image} className="rounded-3xl" />
                  </div>
                  <div
                    className={`gap-x-4 gap-y-4 flex absolute bottom-4 ${
                      item.item === "odd" && "right-5"
                    }`}
                  >
                    {item.workItem.map((detail, element) => {
                      return (
                        <div
                          className="bg-gray-600 rounded-[3rem] py-1.5 px-1.5 font-mono text-sm"
                          key={element}
                        >
                          <div>
                            <FontAwesomeIcon icon={detail.icon} />{" "}
                            {t(detail.title)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <motion.div
                  className="w-full max-w-[35rem] flex-col flex mt-8"
                  variants={itemTextVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <div className="text-[2.5rem]">{t(item.title)}</div>
                  <div className="text-[#b8b7dc]">{t(item.content)}</div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
