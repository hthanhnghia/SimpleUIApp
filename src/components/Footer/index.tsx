import React from 'react';
import RoundedButton from '../RoundedButton';
import { ThemeType } from '../../themes';
import { useTheme } from '../ThemeProvider';
import './index.css';

function Footer() {
  const theme: ThemeType = useTheme();
  return (
    <div className="footer" style={{ backgroundColor: theme.footer }}>
      <RoundedButton />
    </div>
  );
}
export default Footer;
