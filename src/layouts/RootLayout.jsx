import Home from '../pages/Home'
import Stocks from '../pages/Stocks'
// import Mfs from '../pages/Mfs'
import Sharks from '../pages/Sharks'
import Navbar from '../components/Navbar'
import Mfs from '../pages/Mfs'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function RootLayout() {
  return (<div style={{ padding: "20px" }}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/mfs">
          <Mfs />
        </Route>
        <Route path="/supinv">
          <Sharks />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  )
}
