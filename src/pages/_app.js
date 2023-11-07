import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import Navbar from "../components/Header/Navbar";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export const metadata = {
  title: {
    default:
      "Villajahawi.com  - your coastal haven just 10 minutes from Diani Beach ",
  },
};

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" enableSystem={true}>
          <AnimatePresence initial={false}>
            <motion.div key={router.pathname}>
              <Navbar />
              <Component key={router.path} {...pageProps} />
              {/* 
            <motion.div
              className="slide-in"
              initialScale={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>

            <motion.div
              className="slide-out"
              initialScale={{ scaleY: 1 }}
              animate={{ scaleY: 1 }}
              exit={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div> */}
              <Footer />
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  );
}
