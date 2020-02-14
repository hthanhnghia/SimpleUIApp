import React from 'react';
import './App.css';
import Header from './components/Header/';
import Footer from './components/Footer/';
import ResponsiveLayout from './layout/ResponsiveLayout/';
import BigScreen from './layout/BigScreen/';
import SmallScreen from './layout/SmallScreen/';
import WindowDimensionsProvider from './components/WindowDimensionsProvider';

const App = () => {
  return (
    <WindowDimensionsProvider>
      <div className="container">
        <div className="header-layout">
          <Header />
        </div>
        <div className="center-layout">
          <ResponsiveLayout
            threshold={600}
            renderBigScreen={() => <BigScreen />}
            renderSmallScreen={() => <SmallScreen />}
          />
        </div>
        <div className="footer-layout">
          <Footer />
        </div>
      </div>
    </WindowDimensionsProvider>
  );
};

export default App;
