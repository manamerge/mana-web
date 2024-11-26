import "./App.css";
import { Button } from "@manamerge/mana-atomic-ui";
import { Text } from "@manamerge/mana-atomic-ui";
import { Link } from "@manamerge/mana-atomic-ui";
function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          width: "full",
        }}
      >
        <Link className="light">Link here!</Link>
        <Link className="regular">Link here!</Link>
        <Link className="medium">Link here!</Link>
        <Link className="bold">Link here!</Link>
        <Link className="heavy">Link here!</Link>
      </div>

      <Button className="primary">Button secondary primary</Button>
      <Button className="secondary">Button secondary</Button>

      <Text className="light">Gilmer font here!</Text>
      <Text className="regular">Gilmer font here!</Text>
      <Text className="medium">Gilmer font here!</Text>
      <Text className="bold">Gilmer font here!</Text>
      <Text className="heavy">Gilmer font here!</Text>
    </div>
  );
}

export default App;
