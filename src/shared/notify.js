import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (message, type = "success", delay = 2000) => {
  toast.configure({
    autoClose: delay,
    draggable: false,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: true,
    closeButton: false,
    position: toast.POSITION.BOTTOM_RIGHT,
    transition: Slide,
  });
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "danger":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    default:
      toast.success(message);
      break;
  }
};

export default notify;
