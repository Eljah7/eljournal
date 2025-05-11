import React, { useState, useEffect } from 'react';
import TradeForm from './components/TradeForm';
import TradeList from './components/TradeList';

function App() {
  const [trades, setTrades] = useState([]);

  // Load trades from localStorage on start
  useEffect(() => {
    const saved = localStorage.getItem('eljournal-trades');
    if (saved) {
      setTrades(JSON.parse(saved));
    }
  }, []);

  // Save trades to localStorage on change
  useEffect(() => {
    localStorage.setItem('eljournal-trades', JSON.stringify(trades));
  }, [trades]);

  function handleAddTrade(newTrade) {
    setTrades([...trades, newTrade]);
  }

  return (
    <div>
      <h1>ElJournal</h1>
      <TradeForm onAddTrade={handleAddTrade} />
      <TradeList trades={trades} />
    </div>
  );
}

export default App;
