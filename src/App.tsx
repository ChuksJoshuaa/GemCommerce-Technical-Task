import { HeroFeatures, Statistics, ProductHighlight, Benefits } from './components/sections'

function App() {
  return (
    <main className="min-h-screen bg-white w-full">
      <HeroFeatures />
      <div className="bg-[#F8F8F8]" style={{ marginTop: "2rem" }}>
        <Statistics />
      </div>
      <ProductHighlight />
      <Benefits />
    </main>
  );
}

export default App
