import React from 'react';
import { ThemeType } from '../../themes';
import { useTheme } from '../ThemeProvider';
import './index.css';

function FirstLeft() {
  const theme: ThemeType = useTheme();
  return (
    <div
      className="first-left"
      style={{ backgroundColor: theme.firstLeft }}
    ></div>
  );
}
export default FirstLeft;
