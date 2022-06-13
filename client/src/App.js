import React from 'react'
import BasicForm from './components/BasicForm'
import AdvanceForm from './components/AdvanceForm'
import "./App.css"
const App = () => {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-5'>
                    <h1>Basic Form</h1>
                    <BasicForm />
                </div>
                <div className='col-md-5'>
                    <h1>Advance Form</h1>
                    <AdvanceForm />
                </div>
            </div>
        </div>
    )
}

export default App