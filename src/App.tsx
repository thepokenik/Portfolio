import Navbar from './pages/Components/Navbar/Navbar';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col p-8">
      <Navbar />
      <div className="flex-grow flex">
        <Portfolio />
      </div>
    </div>
  );
}

export default App;