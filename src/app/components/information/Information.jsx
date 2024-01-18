import React from 'react';
import './Information.css';
import Image from 'next/image';
export const Information = () => {
	return (
		<>
			<div className="InformationContainer">
				<div className="userData">
					<Image
						src="https://res.cloudinary.com/decjjrdmm/image/upload/v1705609984/83377576_2_fjiawt.jpg"
						alt="me"
						height={300}
						width={300}
						className="avatarimage"
					/>
					<div className="posteos">
						<button className="cvButton">
							<h1>
								<strong>Download Cv</strong>
							</h1>
						</button>
						<button className="emailButton">
							<h1>
								<strong>Email</strong>
							</h1>
						</button>
					</div>
				</div>
			</div>
			<div className="informationDataUser">
				<h1>Christian Natale</h1>
				<h2>FullStack Developer</h2>
				<h3>
					Esta es la version de mi portfolio como si fuese instagram en Windows
					95
				</h3>
				<h3>Espero que te guste!</h3>
			</div>
		</>
	);
};
