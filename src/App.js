import React from 'react';
import { Emulator } from "android-emulator-webrtc/emulator";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Emulator uri='https://my.emulator' />
  );
}

export default App;
