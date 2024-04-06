import Brand from "./components/Brand"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Friends from "./components/Friends"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <Friends />
        <Brand />
        <ContactSection />
        <div className="bg-slate-600 hover:bg-green-600 mx-auto cursor-pointer hover:rounded-full my-5 py-5">
          <h1 className="text-[40px]  text-white text-center  font-sarif">This website Creat By Sufyan jutt</h1>
        </div>
        <Footer />

      </div>
    </>
  )
}

export default App
