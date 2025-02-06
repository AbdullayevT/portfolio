import { useEffect, useRef } from "react";
import ProfilePicture from "@/assets/ProfileImage.jpg";
import { isMobile } from "../utils/devices";
import { useDispatch, useSelector } from "react-redux";
import { setGetAbout } from "../features/general";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FacebookButton, GitHubButton, InstagramButton, LinkedinButton } from "../Components/Buttons/Social";

export default function About() {
  const ref = useRef(null);
  const { getAbout } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    getAbout && ref.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(setGetAbout(false));
  }, [getAbout]);
  const boxVariants = {
    hidden: {
      opacity: 0,
      x: -1000,
    },
    visibile: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        // delay: 0.3,
      },
    },
  };
  const socialVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.29,
      },
    }),
  };
  return (
    <div
      className={` gap-x-16 gap-y-16 grid-rows-[auto] grid-cols-[1.5fr_1fr] ${
        isMobile() && "grid-cols-[1fr] px-[5%]"
      } auto-cols-[1fr] items-center grid `}
      ref={ref}
    >
      <motion.div
        className="w-full max-w-[48rem]"
        variants={boxVariants}
        initial="hidden"
        animate="visibile"
        viewport={{ once: true }}
      >
        <p className="text-[#8566FF] text-lg font-mono font-normal leading-7">
          {t("name")}
        </p>
        <h1 className=" font-sans text-[60px] font-semibold leading-[75px] tracking-tight">
          {t("position")}
        </h1>
        <div className="text-[#b8b7dc]">{t("aboutMeDesc")}</div>
        <div className=" mt-6">
          <div className="inline-flex justify-start gap-4 ">
            <motion.div
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <LinkedinButton />
            </motion.div>
            <motion.div
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <FacebookButton />
            </motion.div>
            <motion.div
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              viewport={{ once: true }}
            >
              <InstagramButton />
            </motion.div>
            <motion.div
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              viewport={{ once: true }}
            >
              <GitHubButton />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div
        className={`z-10 justify-center items-center flex relative ${
          isMobile() && "w-[70%] mx-auto"
        } `}
      >
        <img
          src={ProfilePicture}
          style={{
            filter: "grayscale(100%)",
            width: "100%",
            maxWidth: "100%",
            objectFit: "cover",
            position: "relative",
            zIndex: 1,
            transform: "rotate(-3.934deg)",
          }}
        />
        <div className="w-full h-full bg-[#8566ff] bg-[linear-gradient(45deg,#8566ff,#00d1e8)] absolute shadow-[0_0_4rem_rgba(133,102,255,0.16)] p-0.5 inset-[0%]">
          <div className="bg-[#111223] w-full h-full "></div>
        </div>
      </div>
    </div>
  );
}
