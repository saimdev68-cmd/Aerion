# Supercar 3D Model Asset Guide

Place your custom 3D supercar model here:
`public/models/supercar.glb`

## Requirements:
1. **File Format**: Standard binary glTF (`.glb`) or `.gltf` with embedded or external textures.
2. **Scale**: Real-world scale (approx. 4.6m length, 2.0m width, 1.2m height), centered at origin `(0, 0, 0)` with the wheels touching `y = 0`.
3. **Materials**: PBR Metallic-Roughness workflow.
   - Body paint meshes (preferably named with keywords like `Body`, `Paint`, `Exterior`, `Car_Paint` or using standard materials) will automatically receive the interactive lacquer clearcoat & custom color palette.
   - Glass meshes (windshield, windows, headlight lenses) can use transmission or standard glass materials.
   - Wheels / rims centered at wheel hubs.
   - Headlight projector meshes can be named or tagged for dynamic emissive glow.
4. **Draco Compression**: Supported out of the box via `@react-three/drei`'s `useGLTF`.

## Automatic Procedural Fallback:
If `supercar.glb` is not present in this folder, the website automatically loads an integrated, high-fidelity procedural 3D supercar built with realistic PBR car paint, alloy wheels, carbon aerodynamic wings, and functional LED headlights so the experience runs immediately with zero broken states or crashes.
