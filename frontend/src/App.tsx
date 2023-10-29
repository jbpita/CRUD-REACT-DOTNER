import { UserProvider } from "./context/UserContext"
import Home from "./layouts/Home"

const App = () => {
  return (
    <UserProvider>
      <Home/>
    </UserProvider>
  )
}

export default App