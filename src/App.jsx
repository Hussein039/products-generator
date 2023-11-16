import './App.css'
import Header from './components/Header'
import ProductGenerator from './components/ProductGenerator'
function App() {

  return (
    <>
      <Header />
      <div className='font-mono bg-slate-100 h-screen md:flex justify-center items-center '> 
        <ProductGenerator />
      </div>
    </>
  )
}

export default App
