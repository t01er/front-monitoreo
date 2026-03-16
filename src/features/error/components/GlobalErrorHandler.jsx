import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToast } from "@heroui/toast";
import { clearError } from "../errorSlice";

export default function GlobalErrorHandler() {

  const dispatch = useDispatch();

  const { message, code, view } = useSelector((state) => state.error);

  useEffect(() => {

    if (message && view) {

      addToast({
        title: "Error",
        description: `${message}`,
        color: "danger"
      });

      dispatch(clearError());

    }

  }, [message, view]);

  return null;
}