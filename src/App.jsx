import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { DefaultLayout } from './Layout'
import { Fragment } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((value, index) => {
            let Layout = DefaultLayout;
            if (value.layout) {
              Layout = value.layout;
            } else if (value.layout === null) {
              Layout = Fragment;
            }
            return (<Route key={index} path={value.path} element={<Layout>{value.element}</Layout>} />)
          })
        }
      </Routes>
    </BrowserRouter >
  )
}

export default App
