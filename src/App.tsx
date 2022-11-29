import React from 'react';
import { RecoilRoot, } from 'recoil';
import './App.css';
import Editor from "./components/Editor"
import Console from './components/Console';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="app">
        <Editor />
        <Console />
      </div>
    </RecoilRoot>
  );
}

export default App;