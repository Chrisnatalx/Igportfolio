import React from 'react';
import './Information.css';
import Image from 'next/image';
export const Information = () => {
	return (
		<>
			<div className="InformationContainer">
				<div className="userData">
					<Image
						src="https://avatars.githubusercontent.com/u/83377576?v=4"
						alt="me"
						height={300}
						width={300}
						className="avatarimage"
					/>
					<div className="posteos"></div>
				</div>
				<div></div>
			</div>
		</>
	);
};
