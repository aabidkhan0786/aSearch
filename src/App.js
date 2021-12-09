import React from 'react'
import { Switch ,Route,Redirect} from 'react-router-dom';
// import {Redirect} from 'react-router'
import Navbar from './component/Navbar'
import Results from './component/Results'

const App = () => {
    return (
        <>
            <div className="parent_div">
                <div className="child_div">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/search"/>    
                        </Route>
                        <Route exact path={['/search','/videos','/images','/news']}>
                            <Results/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default App
