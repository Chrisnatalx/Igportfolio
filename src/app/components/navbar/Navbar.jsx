import React from 'react';
import './Navbar.css';
import localFont from 'next/font/local';

export const Navbar = () => {
	return (
		<div className="NavbarContent">
			<div className="NavbarTextContent">
				<img
					src="https://openseauserdata.com/files/5c7db0d6e4ea8e09b6476984f8cc2c55.png"
					alt="logito"
					className="logoIg"
				/>
				<h1>NataleCv.exe</h1>
			</div>
			<div className="NavbarButtonsContent">
				<button>
					<strong>_</strong>
				</button>
				<button>
					<strong>⬜</strong>
				</button>
				<button style={{ marginLeft: '3px' }}>
					<strong>X</strong>
				</button>
			</div>
		</div>
	);
};
