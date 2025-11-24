import "./App.scss";
import { Card } from "./components/Card/Card";
import { CardList } from "./components/CardList/CardList";
import placesData from "./data/places.json";

function App() {

  return (
    <div className="content">
      <CardList>
        {placesData.map((place, i) => {
          return (
            <Card {...place} key={i}/>
          );
        })}
      </CardList>
    </div>
  );
}

export default App;
