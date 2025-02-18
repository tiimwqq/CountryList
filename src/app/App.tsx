import '../shared/styles/App.css';
import { StoreProvider } from './providers/StoreProviders';
import { AppRouter } from './providers/router';

function App() {
  return (
    <StoreProvider>
        <AppRouter/>
    </StoreProvider>
  );
}

export default App;