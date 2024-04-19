/* eslint-disable react/no-unescaped-entities */
import './app.css'
import Header from './components/heading.jsx';
import CardContainer from './components/cardscontainer.jsx';
import ComposeButton from './components/composeButton.jsx';
import Footer from './components/footer.jsx';
function App() {
  return (
    <>
      <div className="container-inner">
        <Header/>
        <CardContainer/>
      </div>
      <ComposeButton/>
      <Footer/>

    </>
  )
}

export default App
