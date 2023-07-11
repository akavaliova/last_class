import React, { useState } from "react";
import Button from "./components/Button";
import FactsPage from "./components/FactsPage";

interface AppProps {}

const App = () => {
  const [showFacts, setShowFacts] = useState(false);

  const handleButtonClick = () => {
    setShowFacts(true);
  };

  return (
    <div>
      {!showFacts && <Button onClick={handleButtonClick} />}
      {showFacts && <FactsPage />}
    </div>
  );
};

export default App;