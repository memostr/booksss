// toastify.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const toastMessage = (type, message) => {
  if (type === "success") {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else if (type === "error") {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export default toastMessage;
