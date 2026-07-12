import React, { createContext, useState, ReactNode, useContext } from 'react';


interface TemaContextType {
  tema: 'claro' | 'oscuro';
  alternarTema: () => void;
}

export const TemaContext = createContext<TemaContextType | undefined>(undefined);

export function TemaProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<'claro' | 'oscuro'>('claro');

  const alternarTema = () => {
    setTema((prev) => (prev === 'claro' ? 'oscuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}


export function useTema() {
  const context = useContext(TemaContext);
  if (!context) throw new Error('useTema debe usarse dentro de un TemaProvider');
  return context;
}