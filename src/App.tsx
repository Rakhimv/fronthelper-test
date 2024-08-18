
import { Button } from '@nextui-org/react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';


function App() {
    return (
       <Routes>
          <Route path='/123' element={
        <div className="App">
            <header className="flex flex-col gap-[10px] items-center">
                <h1 className="text-center mt-[50px] text-[20px] font-mono text-white font-bold">Front Helper V 1.0</h1>
                <Button color='primary'>SOlid</Button>
 
                <a className="text-white underline font-mono text-center" href="https://github.com/Rakhimv">GitHub</a>
            </header>
        </div>
        } />
          </Routes >
    );
}

export default App;
