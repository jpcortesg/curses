import React from 'react'
import Button from '../../Components/Button'
import Panel from '../../Components/Panel'
import Input from '../../Components/Input'
import './index.css'

function Login() {
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

export default Login