import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const pageAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.8 } },
};

const Home = () => (
  <>
    <div className="home-bg">
      <Header />
      <div className="home-container">
        <motion.div
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h1 className="home-h">THE FLAVORS OF INDIA</h1>
          <p className="home-p">A culinary journey crafted with tradition.</p>
        </motion.div>
      </div>
    </div>

    <div className="home-secondary">
      <div className="home-sec-container col-12 col-md-10 col-lg-11 mx-auto">
        <div className="home-sec-left">
          <img src="/legPiece.svg" alt="svg" className="home-svg1" />
          <div className="hh-con">
            <h1 className="home-hh">
              Handcrafted dishes made with authentic spices and pure passion.
            </h1>
            <p className="home-pp">
              spicy biryani, fluffy idli, rich curries, classic meals, and more.
            </p>
          </div>
        </div>
        <div className="images">
          <img src="/biryani.jpg" alt="img" className="img im" />
        </div>
      </div>
    </div>

    <div className="home-secondary">
      <div className="home-sec-container">
        <div className="images">
          <img src="/pizza.jpg" alt="img" className="img im ii" />
        </div>
        <div className="home-sec-left">
          <img src="/Vector.svg" alt="svg" className="home-svg2" />
          <div className="hhh-con">
            <h1 className="home-hh">"Taste..! THE ART OF PIZZA"</h1>
            <p className="home-pp">
              From cheesy Margheritas to spicy Indian-style fusion pizzas — made
              hot and fresh every time.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="home-secondary">
      <div className="home-third-container">
        <div className="home-third-left">
          <img src="/burger.svg" alt="svg" className="home-svg1" />
          <div className="hh-con">
            <h1 className="home-hh">AMERICAN-STYLE BURGERS</h1>
            <p className="home-pp">
              Indulge in layers of flavor — crispy, cheesy, juicy, and
              absolutely irresistible.
            </p>
          </div>
        </div>
        <div className="images">
          <img src="/burger.png" alt="img" className="img1" />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;

