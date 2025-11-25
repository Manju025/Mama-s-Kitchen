import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const pageAnimation = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

class Menu extends Component {
  state = {
    recipes: [],
    allRecipes: [],
    tags: ["All"],
    activeTag: "All",
    isLoading: true,
  };

  componentDidMount() {
    this.fetchRecipes();
  }

  fetchRecipes = async () => {
    try {
      const response = await fetch(
        "https://69243a7f3ad095fb84733ed2.mockapi.io/recipes"
      );
      const data = await response.json();

      const allTags = new Set();
      data.forEach((item) => {
        item.tags?.forEach((tag) => allTags.add(tag));
      });

      this.setState({
        recipes: data,
        allRecipes: data,
        tags: ["All", ...Array.from(allTags)],
        isLoading: false,
      });
    } catch (error) {
      console.error("Error loading recipes:", error);
      this.setState({ isLoading: false });
    }
  };

  onclickOrder = () =>
    alert(
      "This Order is now Order on Call. You can order thrugh +91 9121983461"
    );

  filterByTag = (tag) => {
    const { allRecipes } = this.state;

    if (tag === "All") {
      this.setState({ recipes: allRecipes, activeTag: "All" });
      return;
    }

    const filtered = allRecipes.filter((item) => item.tags.includes(tag));

    this.setState({ recipes: filtered, activeTag: tag });
  };

  handleSelectChange = (event) => {
    const selectedTag = event.target.value;
    this.filterByTag(selectedTag);
  };

  render() {
    const { recipes, tags, isLoading, activeTag } = this.state;

    return (
      <>
        <div className="menu-bg">
          <Header />
          <motion.div
            variants={pageAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="menu-container">
              <h1 className="menu-title">Our Menu</h1>

              <div className="tag-filter-container">
                <select
                  className="tag-select"
                  value={activeTag}
                  onChange={this.handleSelectChange}
                >
                  {tags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>

              {isLoading ? (
                <div className="loader-container">
                  <TailSpin height={60} width={60} color="#e3a43e" />
                </div>
              ) : (
                <>
                  <div className="menu-grid">
                    {recipes.map((item) => (
                      <div key={item.id} className="menu-card">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="menu-image"
                        />
                        <h2 className="menu-name">{item.name}</h2>
                        <div className="menu-details">
                          <div className="menu-info">
                            <p className="menu-cost">Cost: ₹{item.cost}</p>
                            <p className="menu-rating">Rating: {item.rating}</p>
                          </div>
                          <button
                            type="button"
                            className="menu-btn"
                            onClick={this.onclickOrder}
                          >
                            Order now
                          </button>
                        </div>
                        <div className="menu-tags">
                          {item.tags.map((tag, index) => (
                            <span key={index} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Menu;
