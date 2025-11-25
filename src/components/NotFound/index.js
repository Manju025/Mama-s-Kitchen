import "./index.css";

const NotFound = () => (
  <div className="notfound-container">
    <h1 className="notfound-h">Lost Your Way.....?</h1>
    <p className="notfound-p">
      The page you are looking for does not exist. Please check the URL or go
      back to the homepage.
    </p>
    <img src="/lost.png" alt="not found" className="notfound-img" />
  </div>
);
export default NotFound;
