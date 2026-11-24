import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Kunj Patel" age={25} image="https://images.unsplash.com/photo-1795193824281-9197b88c321c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <Card user="John Doe" age={30} image="https://images.unsplash.com/photo-1795193824281-9197b88c321c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <Card user="Jane Smith" age={28} image="https://images.unsplash.com/photo-1795193824281-9197b88c321c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
    </div>
  )
}

export default App