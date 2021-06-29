import MainPage from "pages/MainPage";
import PokemonPage from "pages/PokemonPage";
import { Switch, Route } from "react-router-dom";

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/pokemon/:nome" component={PokemonPage} />
    </Switch>
  )
}

export default Router;
