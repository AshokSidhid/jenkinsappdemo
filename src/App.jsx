import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>CICD JENKINS DEMO</h1>
      <p>
        Jenkins source code uses git repo and sets branch <b>/main</b>.<br />
        Poll SCM triggers option <code>* * * * *</code>.<br />
        Build step: add build step <b>Windows batch command</b>.<br />
        <u>call npm install</u><br />
        <u>call npm run dev</u><br />
        <code>rmdir "C:\......tomcat9\webapps\jenkinsfrontdemo"</code><br />
        <code>mkdir "C:\......tomcat9\webapps\jenkinsfrontdemo"</code><br />
        <code>xcopy path</code>
      </p>
      <p>
        Build step: add build step <b>Windows batch command</b>.<br />
        Stop tomcat 9<br />
        Start tomcat 9
      </p>
    </div>
  )
}

export default App
