import React from 'react';
import { ThemeType } from '../../themes';
import { useTheme } from '../ThemeProvider';
import './index.css';

function Right() {
  const theme: ThemeType = useTheme();
  return <div className="right" style={{ backgroundColor: theme.right }}></div>;
}
export default Right;
