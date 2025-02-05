import { Plane } from "./components/Plane";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function App() {
	return (
		<Canvas camera={{ position: [5, 5, 5] }}>
			<OrbitControls />
			<Plane />
			<ambientLight intensity={10} />
		</Canvas>
	);
}
