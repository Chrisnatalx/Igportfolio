import React from 'react';
import './Information.css';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
				</div>
				<div className="InfoContent">
					<div className="Iconos">
						<Link href="https://www.linkedin.com/in/christian-natale-/">
							<FaLinkedin style={{ height: '40px', width: '40px' }} />
						</Link>

						<Link href="https://github.com/Chrisnatalx">
							<FaGithub style={{ height: '40px', width: '40px' }} />
						</Link>
						<Link href="mailTo:natale.christian.a@gmail.com">
							<MdEmail style={{ height: '40px', width: '40px' }} />
						</Link>
					</div>
					<div className="iconosText">
						<h1>Linkedin</h1>
						<h1>Github</h1>
						<h1>Mail</h1>
					</div>
					<div className="posteos">
						<Link
							href="https://christiannatalecv.tiiny.site"
							download
							className="cvButton"
						>
							<h1>
								<strong>Download CV</strong>
							</h1>
						</Link>
						<Link
							href="mailTo:natale.christian.a@gmail.com"
							className="emailButton"
						>
							<h1>
								<MdEmail style={{ height: '40px', width: '40px' }} />
							</h1>
						</Link>
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
