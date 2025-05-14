// Toast.jsx
import React, { useContext, useEffect, useState } from "react";
import { ToastContext } from "../App";

function Toast() {
  const { toast, setToast } = useContext(ToastContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toast) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setToast("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return show ? <div className="custom-toast">{toast}</div> : null;
}

export default Toast;
