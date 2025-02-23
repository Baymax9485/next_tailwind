import "@/styles/globals.css";
import "@/styles/custom.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    <Header>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </Header>
  );
}
