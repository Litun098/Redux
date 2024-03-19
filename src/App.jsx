import AddTodo from './component/AddTodo'
import Todos from './component/Todos'
import'./index.css'

export default function App() {

    return (
        <div className='mx-4 flex place-content-center flex-col'>
            <h6 className='font-bold'>Redux Toolkit Tutorial</h6>
            <AddTodo/>
            <Todos/>
        </div>
    )
}