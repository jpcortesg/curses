import React from 'react'
import Button from './Button'
import Panel from './Panel'
import Input from './Input'
import './App.css'

function App() {
  return (
    <div className="App">
      <Panel>
        <div className = 'layout-vertical'>
          <Input placeholder = 'username'/>
          <Input placeholder = 'password'/>
        </div>
        <div className="layout-horizontal">
          <Button>Sign In</Button>
          <Button type = 'secondary' >????</Button>
        </div>
      </Panel>
    </div>
  );
}

export default App
