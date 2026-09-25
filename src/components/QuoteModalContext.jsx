'use client';

import React, { createContext, useContext, useState } from 'react';

const QuoteModalContext = createContext({
  isOpen: false,
  openModal: (servicePref) => {},
  closeModal: () => {},
  servicePreference: '',
});

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicePreference, setServicePreference] = useState('');

  const openModal = (servicePref = '') => {
    setServicePreference(servicePref);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setServicePreference('');
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal, servicePreference }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}
