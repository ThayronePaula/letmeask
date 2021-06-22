import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';

import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'

export const testContext = React.createContext({}as any)


function App() {
  const [value, setValue] =React.useState('');

  return (
    <BrowserRouter>
      <testContext.Provider value={{value, setValue}} >

        <Route path='/' exact component={Home} />
        <Route path='/rooms/new' component={NewRoom} />
      </testContext.Provider>
    </BrowserRouter>
  );
}

export default App;
