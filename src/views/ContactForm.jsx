import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { isMobile } from "../utils/devices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { personalInfo } from "../utils/variables";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setGetContact, setIsLoadingSubmit } from "../features/general";
import { showNotification } from "../utils/showNotification";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ContactForm() {
  const inputStyle =
    "rounded-2xl bg-[#cdcdcd] placeholder:text-black placeholder:text-base p-3 focus:border-[#8566FF] hover:border-[#8566FF]";
  const [contactWithMeForm] = Form.useForm();
  const ref = useRef(null);
  const { t } = useTranslation();
  const { getContact, isLoadingSubmit } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  useEffect(() => {
    getContact && ref.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(setGetContact(false));
  }, [getContact]);
  const sendEmail = (e) => {
    dispatch(setIsLoadingSubmit(true));
    const items = contactWithMeForm.getFieldsValue();
    const formElement = document.createElement("form");
    formElement.style.display = "none";

    for (const key in items) {
      if (items.hasOwnProperty(key)) {
        const inputElement = document.createElement("input");
        inputElement.name = key;
        inputElement.value = items[key];
        formElement.appendChild(inputElement);
      }
    }

    document.body.appendChild(formElement);

    emailjs
      .sendForm(
        "service_a7spiee",
        "template_rinqv87",
        formElement,
        "0wlYSvccZd-HFSb0-"
      )
      .then(
        (result) => {
          contactWithMeForm.resetFields();
          dispatch(setIsLoadingSubmit(false));
          showNotification({
            type: "success",
            message: "Success",
            description: (
              <p>
                {t("contactSuccessNotification")} <span>{"\u{1F44C}"}</span>
              </p>
            ),
            placement: "topRight",
          });
        },
        (error) => {
          dispatch(setIsLoadingSubmit(false));
          showNotification({
            type: "success",
            message: "Success",
            description: (
              <p>
                {t(contactErrorNotification)} <span>{"\u{1F614}"}</span>
              </p>
            ),
            placement: "topRight",
          });
        }
      );
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.4,
      },
    }),
  };

  const boxVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  };
  return (
    <div className={` w-full my-auto ${isMobile() && "max-w-[85rem]"}`}>
      <div className={`py-[6rem] mt-10 ${isMobile() && "py-[2rem]"}`} ref={ref}>
        <div
          className={`gap-x-16 gap-y-16 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] grid relative rounded-[30px] ${
            isMobile() && "!grid-cols-[1fr] px-[5%]"
          }`}
        >
          <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="text-[#00d1e8] text-3xl font-mono font-semibold uppercase">
              {t("contactWithMeTitle")}
            </div>
            <div className="w-full mt-5 h-0.5 bg-white"></div>
            <div className="w-full h-8" />
            <div
              className={`gap-y-5 gap-x-5 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid font-normal leading-[1.25] tracking-tight ${
                !isMobile() && "text-[1.5rem]"
              }`}
            >
              {personalInfo.map((itemInfo, index) => {
                return (
                  <motion.div
                    className="gap-7 justify-start items-center flex"
                    key={index}
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={index + 1}
                  >
                    <FontAwesomeIcon icon={itemInfo.icon} />
                    <div>{itemInfo.title}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <div>
            <Form form={contactWithMeForm} onFinish={sendEmail}>
              <motion.div
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Form.Item
                  name="userEmail"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: t("formValidationEmail"),
                    },
                  ]}
                >
                  <Input
                    className={inputStyle}
                    placeholder={t("placeholderEmail")}
                  />
                </Form.Item>
              </motion.div>
              <motion.div
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Form.Item
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: t("formValidationUserName"),
                    },
                  ]}
                >
                  <Input
                    className={inputStyle}
                    placeholder={t("placeholderName")}
                  />
                </Form.Item>
              </motion.div>
              <motion.div
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Form.Item
                  name="userMessage"
                  rules={[
                    {
                      required: true,
                      message: t("formValidationMessage"),
                    },
                  ]}
                >
                  <Input.TextArea
                    className={inputStyle}
                    placeholder={t("placeHolderMessage")}
                    style={{
                      height: "150px",
                    }}
                  />
                </Form.Item>
              </motion.div>
              <motion.div
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Form.Item className="mt-5">
                  <Button
                    type="text"
                    className="text-[rgb(0,209,232)] !rounded-[5rem] py-[0.5rem] px-[1rem] bg-[#00d1e80a] hover:!bg-[#00D1E8] w-full"
                    size="large"
                    htmlType="submit"
                    loading={isLoadingSubmit}
                    disabled={isLoadingSubmit}
                  >
                    {t("submitBtn")}
                  </Button>
                </Form.Item>
              </motion.div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
