import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";

import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { TransactionsContext, TransactionsProvider } from "./TransactionsContext";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isOpen,setIsOpen] = useState(false);
      
  function isOpened(){
    setIsOpen(true);
 }
  function isClosed(){
    setIsOpen(false); 
}
  return (
    <TransactionsProvider>
      <Header OnIsOpened={isOpened}/>
      <Dashboard />
      <NewTransactionModal
      isOpen={isOpen}
      onRequestClose={isClosed}
      />
      <GlobalStyle />

    </TransactionsProvider>
  );
}