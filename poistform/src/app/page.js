import DesignLine from "./components/DesignLine";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";


export default function Home() {
  return (
    <main className="h-full lg:h-screen">
      <Header />
      <DesignLine />
      <Form />
      <Footer />
    </main>
  )
}
