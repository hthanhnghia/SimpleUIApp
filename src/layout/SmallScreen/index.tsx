import React from 'react';
import Center from '../../components/Center';
import FirstLeft from '../../components/FirstLeft';
import SecondLeft from '../../components/SecondLeft';
import Right from '../../components/Right';
import './index.css';

function SmallScreen() {
  return (
    <div className="small-screen-layout">
      <div className="small-screen-center-layout">
        <Center />
      </div>
      <div className="small-screen-left-layout">
        <div className="small-screen-first-left-layout">
          <FirstLeft />
        </div>
        <div className="small-screen-second-left-layout">
          <SecondLeft />
        </div>
      </div>

      <div className="small-screen-right-layout">
        <Right />
      </div>
    </div>
  );
}
export default SmallScreen;
