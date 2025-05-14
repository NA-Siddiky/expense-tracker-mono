import './App.css'
import {SignupForm} from './components/SignupForm'
import {ExpenseListScreen} from './screens/ExpenseListScreen'

export const App: React.FC = () => {
  return (
    <>
      <ExpenseListScreen />
      <SignupForm />
    </>
  )
}

export default App
