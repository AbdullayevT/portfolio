import { notification } from "antd";
export const showNotification = ({
  type = "error",
  duration = 3,
  message = "Error occured",
  placement = "bottomRight",
  description = "Error",
}) => {
  notification[type]({
    message,
    placement,
    description,
    duration,
  });
};