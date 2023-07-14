import "@/styles/globals.css";
import { ViewProvider } from "@/context/ViewContext";

export default function App({ Component, pageProps }) {
  return (
    <ViewProvider>
      <Component {...pageProps} />
    </ViewProvider>
  );
}
