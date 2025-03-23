import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import reactLogo from './assets/react.png'







import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))


root.render(
  <StrictMode>
    <Page />
  </StrictMode>
)

function Page() {
  return (
    <>
      <Header />
      <Main />
      <Footer />


    </>
  )
}

function Header() {
  return(
    <>
        <header className='header'>
          <img src={reactLogo} alt="aaaaaaa" width="40px"/>
          <nav>
            <ul className='nav-list'>
              <li className='nav-list-item'>Pricing</li>
              <li className='nav-list-item'>About</li>
              <li className='nav-list-item'>Contact</li>
            </ul>
          </nav>
        </header>  
    </>
  )
}

function Main() {
  return(
    <>
      <main>

        <h1>aaaaaaaaasdfasdf</h1>
          <ol>
            <li>testtest</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ol>
        </main>
    </>
  )
}

function Footer() {
  return(
    <>
      <footer>
        <small>
          c 20xx gispan dev. all right
        </small>
      </footer>
    </>
  )
}




