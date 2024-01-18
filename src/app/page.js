import { Bar } from './components/bar/Bar';
import { Information } from './components/information/Information';
import { Navbar } from './components/navbar/Navbar';
import './globals.css';
export default function Home() {
	return (
		<div className="WindowsContainer">
			<div className="ContainerHome">
				<Information />
			</div>
		</div>
	);
}
