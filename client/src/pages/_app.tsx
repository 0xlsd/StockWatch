import AuthModal from "@/components/Auth";
import { AuthProvider } from "@/contexts/AuthContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Toaster />
        <Component {...pageProps} />
        <AuthModal />
      </AuthProvider>
    </>
  );
}
