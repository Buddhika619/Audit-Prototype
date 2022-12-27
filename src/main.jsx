import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

//create a new instance of the QueryClient
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wrap the app in the QueryClientProvider and pass in the queryClient instance */}
    <QueryClientProvider client={queryClient}>
      <App />
    {/* include the ReactQueryDevtools component for debugging purposes */}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
)
