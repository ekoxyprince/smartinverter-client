import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { AuthProvider } from './contexts/AuthContext'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
