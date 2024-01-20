import React from 'react';
import './About.css';
import { Aboutme } from '../components/aboutme/Aboutme';
import { Education } from '../components/education/Education';
export default function page() {
	return (
		<div className="WindowContainerAbout">
			<div className="ContainerAbout">
				<Aboutme />
				<Education />
			</div>
		</div>
	);
}
