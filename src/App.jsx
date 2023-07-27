import Search from '@features/search/Search';
import Weather from '@features/weather/Weather';

function App() {

  return (
    <div className="container mx-auto py-20">
      <h1 className="py-10 underline font-bold text-center text-3xl text-gray-500">Weather App</h1>
      <Search />
      <Weather />
    </div>
  )
}

export default App
