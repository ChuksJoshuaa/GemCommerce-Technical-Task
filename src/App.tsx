import { Suspense, lazy } from 'react'
import { Loader } from './components/ui/Loader'

const HeroFeatures = lazy(() =>
  import('./components/sections/HeroFeatures').then(module => ({
    default: module.HeroFeatures
  }))
)

const Statistics = lazy(() =>
  import('./components/sections/Statistics').then(module => ({
    default: module.Statistics
  }))
)

const ProductHighlight = lazy(() =>
  import('./components/sections/ProductHighlight').then(module => ({
    default: module.ProductHighlight
  }))
)

const Benefits = lazy(() =>
  import('./components/sections/Benefits').then(module => ({
    default: module.Benefits
  }))
)

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen bg-white w-full">
        <HeroFeatures />
        <div className="bg-[#F8F8F8]" style={{ marginTop: "2rem" }}>
          <Statistics />
        </div>
        <ProductHighlight />
        <Benefits />
      </main>
    </Suspense>
  )
}

export default App
