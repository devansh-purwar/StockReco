import Home from './pages/Home/Home'
import Stocks from './pages/Stock/Stocks'
import Mutual from './pages/MutualFund/Mutual'
import Sharks from './pages/BigShark/Sharks'
import Daily from './pages/Daily/Daily'
import Navbar from './components/Navbar'
import Stock from './pages/Stock/Stock'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/stock/:id">
            <Stock />
          </Route>
          <Route path="/mfs">
            <Mutual />
          </Route>
          <Route path="/supinv">
            <Sharks />
          </Route>
          <Route path="/daily">
            <Daily />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
