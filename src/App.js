import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <Card
        imgSrc={require("./img/abbey_road.jpg")}
        imgAlt="abbey_road"
        cardWidth="350px"
      >
        <h5 className="card-title">New title</h5>
        <p className="card-text">New content</p>
        <button className="btn btn-primary">Click</button>
      </Card>
    </div>
  );
}

export default App;
