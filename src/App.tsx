import React from "react";
import "./App.css";
import { Button } from "@manamerge/mana-atomic-ui";
import { Text } from "@manamerge/mana-atomic-ui";

function App() {
  return (
    <div className="App">
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
