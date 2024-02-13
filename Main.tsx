import { registerRootComponent } from 'expo';
import App from './src/App';

export default function Main() {
  return <App />;
}

registerRootComponent(Main);
