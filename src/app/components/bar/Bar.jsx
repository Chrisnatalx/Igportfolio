import React from 'react';
import './Bar.css';
import Link from 'next/link';

export const Bar = () => {
	return (
		<>
			<div className="BarContent">
				<Link href="/">
					<h3>Home</h3>
				</Link>
				<Link href="/about">
					<h3>About me</h3>
				</Link>
				<Link href="/">
					<h3>Proyects</h3>
				</Link>
			</div>
			<div className="UsernameCenter">
				<h1>
					<strong>ChrisNatalx</strong>
				</h1>
			</div>
		</>
	);
};
