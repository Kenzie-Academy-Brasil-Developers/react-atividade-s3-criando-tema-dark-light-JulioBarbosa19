import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './providers/Theme/theme';
import { AppContainer } from './components/AppContainer/app.style';
import { MainSection } from './components/MainSection/main.style';
import { Button } from './components/Button/button.style';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const getOpositeTheme = useCallback(
    () => (currentTheme === 'light' ? 'dark' : 'light'),
    [currentTheme]
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>You are in {currentTheme} mode</h1>
          <Button onClick={()=> setCurrentTheme(getOpositeTheme())}>
            switch to {getOpositeTheme} mode
          </Button>
        </MainSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
