import { useRef } from "react";
import { MeshPhysicalMaterial } from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/fragmentShader.glsl";
import { useFrame } from "@react-three/fiber";

export function Plane() {
	const materialRef = useRef();
	useFrame((state) => {
		if (materialRef.current) {
			materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
		}
	});
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]}>
			<planeGeometry args={[5, 5, 5]} />

			<CustomShaderMaterial
				ref={materialRef}
				baseMaterial={MeshPhysicalMaterial}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				// Your Uniforms
				uniforms={{
					uTime: {
						value: 0,
					},
				}} // Base material properties
				flatShading
			/>
		</mesh>
	);
}
