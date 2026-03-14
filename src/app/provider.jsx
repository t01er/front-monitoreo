import { HeroUIProvider } from "@heroui/react";
import { useHref, useNavigate } from "react-router-dom";
import { ToastProvider } from "@heroui/toast";
import { useEffect } from "react";
import { addToast } from "@heroui/react";
import { useDispatch } from "react-redux";
// import { logout } from "./store/authSlice";
import { Button } from "@heroui/react";

// function GlobalErrorHandler() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const handler = (e) => {
//       const customEvent = e;
//       const errorData = customEvent.detail;

//       if (errorData?.errors && typeof errorData.errors === "object") {
//         Object.entries(errorData.errors).forEach(([field, msg]) => {
//           addToast({
//             title: "Error de validación",
//             description: `${field}: ${msg}`,
//             color: "danger",
//           });
//         });
//       } else {
//         const isJwtError =
//           errorData?.error_code?.code === "UNAUTHORIZED" ||
//           errorData?.message?.toLowerCase().includes("jwt");

//         if (isJwtError) {
//           addToast({
//             title: "Sesión expirada",
//             description: (
//               <div className="flex items-center gap-2">
//                 <span>Tu sesión ha expirado.</span>
//                 <Button
//                   color="primary"
//                   onClick={() => {
//                     dispatch(logout());
//                     navigate("/");
//                   }}
//                 >
//                   Reingresar
//                 </Button>
//               </div>
//             ),
//             color: "warning",
//             timeout: 8000,
//             shouldShowTimeoutProgress: true,
//           });
//         } else {
//           addToast({
//             title: errorData?.error_code?.code || "Error",
//             description:
//               errorData?.error_code?.message ||
//               errorData?.message ||
//               "Error en la petición",
//             color: "danger",
//           });
//         }
//       }
//     };

//     document.addEventListener("global-api-error", handler);
//     return () => document.removeEventListener("global-api-error", handler);
//   }, [dispatch, navigate]);

//   return null;
// }

export function Providers({ children }) {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <ToastProvider placement="bottom-center" maxVisibleToasts={3} />
      {children}
    </HeroUIProvider>
  );
}

// <GlobalErrorHandler />