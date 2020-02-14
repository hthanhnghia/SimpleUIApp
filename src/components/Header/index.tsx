import React from 'react';
import { ThemeType } from '../../themes';
import { useTheme } from '../ThemeProvider';
import './index.css';

function Header() {
  const theme: ThemeType = useTheme();
  return (
    <div className="header" style={{ backgroundColor: theme.header }}></div>
  );
}
export default Header;
