import React from "react";
import "../styles/globals.css";
import { Libre_Baskerville } from "next/font/google";

const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function App({ Component, pageProps }) {
  return (
    <main className={baskerville.className}>
      <Component {...pageProps} />
    </main>
  );
}
export default App;
