import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsList from './components/CardsList';
import { cards } from './components/Cards.const';

export default function App() {
  return (
    <div className="App">
      <CardsList cards={cards} />
    </div>
  );
}