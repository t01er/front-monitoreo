import AppRoutes from "./routes/AppRoutes";
import GlobalErrorHandler from "./features/error/components/GlobalErrorHandler";
export default function App() {
  return (
    <>
      <GlobalErrorHandler />
      <AppRoutes />
    </>
  );
}
