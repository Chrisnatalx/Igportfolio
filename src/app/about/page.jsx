import React from 'react';
import './About.css';
import { Aboutme } from '../components/aboutme/Aboutme';
export default function page() {
	return (
		<div className="WindowContainerAbout">
			<div className="ContainerAbout">
				<Aboutme />
			</div>
		</div>
	);
}
