import React, { createContext, useContext, useState, useEffect } from 'react';

export interface WindowDimensionsType {
  height: number;
  width: number;
}

const windowDims: () => WindowDimensionsType = () => ({
  height: window.innerHeight,
  width: window.innerWidth
});

export const WindowDimensionsCtx = createContext<WindowDimensionsType>({
  height: 0,
  width: 0
});

const WindowDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState<WindowDimensionsType>(
    windowDims()
  );
  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDims());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  );
};

export default WindowDimensionsProvider;

export const useWindowDimensions = () => {
  return useContext(WindowDimensionsCtx);
};
