import React, { Component } from "react";
import Checkout from "./components/Checkout/Checkout";
import './App.css'

export default class App extends Component {
	render() {
		return (
			<div className=' app' style={{
        height: '100vh',
        background: `rgba(0, 0, 0, 0.6) url("./image/bgmovie.jpg") no-repeat`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
				overflowY: 'scroll'
      }}>
				<Checkout />
			</div>
		);
	}
}
