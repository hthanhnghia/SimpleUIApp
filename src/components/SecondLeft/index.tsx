import React from 'react';
import { ThemeType } from '../../themes';
import { useTheme } from '../ThemeProvider';
import './index.css';

function SecondLeft() {
  const theme: ThemeType = useTheme();
  return (
    <div
      className="second-left"
      style={{ backgroundColor: theme.secondLeft }}
    ></div>
  );
}
export default SecondLeft;
