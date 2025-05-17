import type React from 'react'
import {BrowserRouter} from 'react-router'

interface IProps {
  children: React.ReactNode
}

export const AppProviders: React.FC<IProps> = ({children}) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
