import React, { useState, useEffect } from "react";
import FactItem from "./FactItem";
import LoadingIndicator from "./LoadingIndicator";

interface FactsPageProps {}

const FactsPage: React.FC<FactsPageProps> = () => {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFacts([
        "Fact 1: cats are cute",
        "Fact 2: cats are always hungry",
        "Fact 3: cats are independent"
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleFactRemoval = (fact: string) => {
    const updatedFacts = facts.filter((item) => item !== fact);
    setFacts(updatedFacts);
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      {facts.map((fact, index) => (
        <FactItem key={index} fact={fact} onRemove={handleFactRemoval} />
      ))}
    </div>
  );
};

export default FactsPage;