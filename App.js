import "./styles.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

export default function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "ad2578b6";
  const YOUR_APP_KEY = "d8eaf5990635e3fb99e275be08de7eb3";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="app">
      <h1>Food Recipe Plaza</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input type="submit" className="app__submit" value="Search" />
        <select className="app__healthlabels">
          <option onClick={() => sethealthLabels("vega")}> Vegan </option>
          <option onClick={() => sethealthLabels("vegetarian")}>
            Vegatarian
          </option>
          <option onClick={() => sethealthLabels("paleo")}> paleo </option>
          <option onClick={() => sethealthLabels("dairy-free")}>
            dairy-free
          </option>
          <option onClick={() => sethealthLabels("gluten-free")}>
            gluten-free
          </option>
          <option onClick={() => sethealthLabels("wheat-free")}>
            wheat-free
          </option>
          <option onClick={() => sethealthLabels("low-sugar")}>
            low-sugar
          </option>
          <option onClick={() => sethealthLabels("egg-free")}>egg-free</option>
          <option onClick={() => sethealthLabels("peanut-free")}>
            peanut-free
          </option>
          <option onClick={() => sethealthLabels("tree-nut-free")}>
            tree-nut-free
          </option>
          <option onClick={() => sethealthLabels("soy-free")}>soy-free</option>
          <option onClick={() => sethealthLabels("fish-free")}>
            fish-free
          </option>
          <option onClick={() => sethealthLabels("shellfish-free")}>
            shell-free
          </option>
          <option onClick={() => sethealthLabels("gluten-free")}>
            gluten-free
          </option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}
