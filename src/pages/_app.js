import Footer from "../components/Footer";
import Navbar from "../components/Header/Navbar";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <AnimatePresence initial={false} mode="popLayout">
        <ThemeProvider attribute="class" enableSystem={true}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}
