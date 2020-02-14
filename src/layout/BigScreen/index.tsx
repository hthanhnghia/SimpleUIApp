import React from 'react';
import Center from '../../components/Center';
import FirstLeft from '../../components/FirstLeft';
import SecondLeft from '../../components/SecondLeft';
import Right from '../../components/Right';
import './index.css';

function BigScreen() {
  return (
    <div className="big-screen-layout">
      <div className="big-screen-left-layout">
        <div className="big-screen-first-left-layout">
          <FirstLeft />
        </div>
        <div className="big-screen-second-left-layout">
          <SecondLeft />
        </div>
      </div>
      <div className="big-screen-center-layout">
        <Center />
      </div>
      <div className="big-screen-right-layout">
        <Right />
      </div>
    </div>
  );
}
export default BigScreen;
