import { AppProvider } from "../data/context/AppContext";
import { AuthProvider } from "../data/context/AuthContext";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../i18n";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />;
      </AppProvider>
    </AuthProvider>
)
}
