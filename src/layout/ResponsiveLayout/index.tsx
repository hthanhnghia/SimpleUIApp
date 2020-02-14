import {
  useWindowDimensions,
  WindowDimensionsType
} from '../../components/WindowDimensionsProvider';

interface ResponsiveLayoutProps {
  threshold: number;
  renderBigScreen: () => any;
  renderSmallScreen: () => any;
}

const ResponsiveLayout = ({
  threshold = 500,
  renderSmallScreen,
  renderBigScreen
}: ResponsiveLayoutProps) => {
  const { width }: WindowDimensionsType = useWindowDimensions();

  return width > threshold ? renderBigScreen() : renderSmallScreen();
};

export default ResponsiveLayout;
