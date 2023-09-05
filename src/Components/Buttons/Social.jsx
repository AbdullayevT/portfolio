import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

const style =
  "text-white border-none hover:!bg-transparent hover:!text-[#8566ff] ";

export const LinkedinButton = () => {
  return (
    <Button
      className={style}
      size="large"
      type="text"
      target="_blank"
      href="https://www.linkedin.com/in/tapdiq-abdullayev/"
      icon={<FontAwesomeIcon icon={faLinkedin} size="xl" />}
    ></Button>
  );
};

export const FacebookButton = () => {
  return (
    <Button
      className={style}
      size="large"
      type="text"
      target="_blank"
      href="https://www.facebook.com/AbdullayevTapdiq"
      icon={<FontAwesomeIcon icon={faFacebook} size="xl" />}
    ></Button>
  );
};

export const InstagramButton = () => {
  return (
    <Button
      className={style}
      size="large"
      type="text"
      target="_blank"
      href="https://www.instagram.com/abdullayevt_/"
      icon={<FontAwesomeIcon icon={faInstagram} size="xl" />}
    ></Button>
  );
};

export const GitHubButton = () => {
  return(
    <Button
      className={style}
      size="large"
      type="text"
      target="_blank"
      href="https://github.com/AbdullayevT"
      icon={<FontAwesomeIcon icon={faGithub} size="xl" />}
    ></Button>
  )
}