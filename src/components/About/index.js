import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";

import "./index.css";

const pageAnimation = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

const About = () => (
  <>
    <div className="about-bg">
      <Header />
      <motion.div
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h1 className="about-heading">Mama's Kitchen</h1>
        <div className="about-container">
          <div className="about-content">
            <img src="/chef.png" alt="chef" className="about-img" />
            <p className="about-info">
              Welcome to Mama’s Kitchen..! <br />
              where every recipe begins with love. We’re not just a restaurant;
              we’re a warm hug on a tough day, a nostalgic reminder of home, and
              a celebration of the timeless flavors of India. <br />
              At Mama’s Kitchen, food is not an item on a menu... it’s a memory,
              a feeling, and a story passed down through generations. From the
              crisp, golden Masala Dosa of the South to the rich, creamy Paneer
              Butter Masala of the North… <br />
              From the aroma of Hyderabadi biryani to the sweetness of Bengali
              desserts… we bring India’s favorite comfort foods together, made
              the way a mother cooks — with patience, purity, and real
              ingredients. Our mission is simple: Serve authentic,
              homemade-style dishes that make you feel at home, even when you’re
              far from home. <br />
              At Mama’s Kitchen, every plate is prepared with the same attention
              and affection your mom would pour into her cooking. <br />
              No shortcuts, no compromises just honest food that fills your
              stomach and your heart. Thank you for being part of our little
              family. Sit back, feel at home, and enjoy the taste of tradition
              with a touch of warmth. Welcome to Mama’s Kitchen — Where Every
              Bite Feels Like Home.
            </p>
          </div>
          <div className="about-content1">
            <div className="about-subcontent">
              <h1 className="about-subheading">Demo Notice</h1>
              <p className="about-subinfo">
                This is a demo restaurant application created for educational
                purposes. All the content, including images and text. This
                restaurant website is created for demo and educational purposes
                only. Mama’s Kitchen is not an actual commercial restaurant.
              </p>
            </div>
            <img
              src="/developer.png"
              alt="developer"
              className="about-devimg"
            />
          </div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </>
);

export default About;
