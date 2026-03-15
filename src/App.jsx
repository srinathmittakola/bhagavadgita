import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChaptersPage from "./pages/ChaptersPage";
import SloksPage from "./pages/SloksPage";
import SlokPage from "./pages/SlokPage";
import StaticPage from "./pages/StaticPage";
import ContactPage from "./pages/ContactPage";
import QuotesPage from "./pages/QuotesPage";
import { siteContent } from "./config/siteContent";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSlok, setSelectedSlok] = useState(null);
  const [selectedSlokNum, setSelectedSlokNum] = useState(null);

  const handleHome = () => {
    setCurrentPage('home');
    setSelectedChapter(null);
    setSelectedSlok(null);
    setSelectedSlokNum(null);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      margin: 0,
      padding: 0
    }}>
      <Header onHome={handleHome} />

      <main style={{
        flex: 1,
        position: "relative",
        margin: 0,
        padding: 0
      }}>
        <AnimatePresence mode="wait">
          {currentPage === 'privacy' && (
            <motion.div key="privacy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <StaticPage pageData={siteContent.privacyPolicy} />
            </motion.div>
          )}

          {currentPage === 'terms' && (
            <motion.div key="terms" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <StaticPage pageData={siteContent.termsOfService} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <ContactPage />
            </motion.div>
          )}

          {currentPage === 'quotes' && (
            <motion.div key="quotes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <QuotesPage />
            </motion.div>
          )}

          {currentPage === 'home' && (
            selectedChapter ? (
              selectedSlokNum ? (
                <motion.div
                  key="slok"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <SlokPage
                    chapter={selectedChapter}
                    verseNum={selectedSlokNum}
                    onBack={() => { setSelectedSlok(null); setSelectedSlokNum(null); }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="chapter"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <SloksPage
                    chapter={selectedChapter}
                    onBack={() => setSelectedChapter(null)}
                    onSelectSlok={(verse, num) => {
                      setSelectedSlok(verse);
                      setSelectedSlokNum(num);
                    }}
                  />
                </motion.div>
              )
            ) : (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ChaptersPage onSelectChapter={setSelectedChapter} />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
