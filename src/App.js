import './App.css';
import Navbar from './Navbar';
import Random from './Random';
import User from './User';
import AdvancedThemeContextProvider from './contexts/AdvancedThemeContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import UserProfileContextProvider from './contexts/UserProfileContextProvider';

function App() {
  return (
    <AdvancedThemeContextProvider>
      <ThemeContextProvider>
        <UserProfileContextProvider>
          <div className="App">
            <Navbar />
            <User />
            <Random />
          </div>
        </UserProfileContextProvider>
      </ThemeContextProvider>
    </AdvancedThemeContextProvider>
  );
}

export default App;
