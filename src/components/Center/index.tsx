import React from 'react';
import { ThemeType } from '../../themes';
import { useTheme } from '../ThemeProvider';
import './index.css';

function Center() {
  const theme: ThemeType = useTheme();
  return (
    <div className="center" style={{ backgroundColor: theme.center }}></div>
  );
}
export default Center;
