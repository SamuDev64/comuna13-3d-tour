import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { HOTSPOTS } from '../data/tourData.js';

function createMuralTexture(seed, palette, labelText) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 512, 256);
  grad.addColorStop(0, palette[0]);
  grad.addColorStop(0.5, palette[1]);
  grad.addColorStop(1, palette[2]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);

  for (let i = 0; i < 14; i++) {
    const angle = ((i + seed) * Math.PI) / 7;
    ctx.fillStyle = palette[(i + 1) % palette.length];
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.moveTo(256, 128);
    ctx.lineTo(256 + Math.cos(angle) * 320, 128 + Math.sin(angle) * 220);
    ctx.lineTo(256 + Math.cos(angle + 0.3) * 320, 128 + Math.sin(angle + 0.3) * 220);
    ctx.closePath();
    ctx.fill();
  }

  ctx.globalAlpha = 0.85;
  ctx.fillStyle = '#fbbf24';
  ctx.beginPath();
  ctx.arc(110 + (seed % 3) * 40, 128, 64, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(110 + (seed % 3) * 40, 128, 42, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(350, 140);
  ctx.quadraticCurveTo(390, 60, 450, 90);
  ctx.quadraticCurveTo(410, 130, 440, 175);
  ctx.quadraticCurveTo(380, 165, 350, 140);
  ctx.fill();

  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 10;
  ctx.strokeRect(8, 8, 496, 240);

  ctx.fillStyle = 'rgba(7, 11, 20, 0.72)';
  ctx.fillRect(190, 172, 295, 54);

  ctx.font = '900 26px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText(labelText, 337, 208);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function CameraController({ activeStop, selectedHotspot, freeExplore }) {
  const { camera } = useThree();
  const controlsRef = useRef();
  const hasRunIntro = useRef(false);
  const targetVec = useRef(new THREE.Vector3(0, 6, 0));

  useEffect(() => {
    if (!hasRunIntro.current) {
      hasRunIntro.current = true;
      camera.position.set(0, 42, 72);
      gsap.to(camera.position, {
        x: activeStop.cameraPos[0],
        y: activeStop.cameraPos[1],
        z: activeStop.cameraPos[2],
        duration: 2.6,
        ease: 'power3.out'
      });
    }
  }, [camera, activeStop]);

  useEffect(() => {
    if (freeExplore) return;

    let destPos = activeStop.cameraPos;
    let destTarget = activeStop.cameraTarget;

    if (selectedHotspot) {
      const [hx, hy, hz] = selectedHotspot.coordinates;
      destPos = [hx * 1.15, hy + 3.0, hz + 9.5];
      destTarget = [hx, hy + 0.5, hz];
    }

    gsap.to(camera.position, {
      x: destPos[0],
      y: destPos[1],
      z: destPos[2],
      duration: 1.6,
      ease: 'power3.inOut',
      overwrite: 'auto'
    });

    gsap.to(targetVec.current, {
      x: destTarget[0],
      y: destTarget[1],
      z: destTarget[2],
      duration: 1.6,
      ease: 'power3.inOut',
      overwrite: 'auto'
    });
  }, [activeStop, selectedHotspot, freeExplore, camera]);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetVec.current, 0.12);
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.06}
      enableZoom={ true }
      enablePan={freeExplore}
      maxPolarAngle={Math.PI / 2 - 0.04}
      minDistance={5}
      maxDistance={75}
    />
  );
}

function ValleyAndHillside({ isNight }) {
  const terraces = useMemo(() => {
    const list = [];
    for (let i = 0; i < 12; i++) {
      const y = i * 1.15;
      const z = 8 - i * 1.65;
      const width = 34 - i * 1.1;
      list.push({ id: i, y, z, width, depth: 3.4 });
    }
    return list;
  }, []);

  const mountainPeaks = useMemo(
    () => [
      { pos: [-28, 12, -22], radius: 22, height: 28, color: isNight ? '#0b1325' : '#1e3a2f' },
      { pos: [0, 16, -26], radius: 28, height: 34, color: isNight ? '#091020' : '#193228' },
      { pos: [28, 13, -20], radius: 22, height: 30, color: isNight ? '#0b1325' : '#224034' },
      { pos: [-38, 9, -6], radius: 18, height: 20, color: isNight ? '#0d162a' : '#27493b' },
      { pos: [38, 10, -5], radius: 19, height: 22, color: isNight ? '#0d162a' : '#27493b' }
    ],
    [isNight]
  );

  const valleyLights = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 120; i++) {
      const x = ((i * 37) % 64) - 32;
      const z = 11 + ((i * 23) % 24);
      const color = i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#fde047' : '#38bdf8';
      pts.push({ id: i, x, z, color });
    }
    return pts;
  }, []);

  return (
    <group>
      <mesh position={[0, -0.6, 8]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[140, 120]} />
        <meshStandardMaterial color={isNight ? '#060a14' : '#1a2e26'} roughness={0.9} />
      </mesh>

      {mountainPeaks.map((m, idx) => (
        <mesh key={idx} position={m.pos}>
          <coneGeometry args={[m.radius, m.height, 7]} />
          <meshStandardMaterial color={m.color} roughness={0.85} flatShading />
        </mesh>
      ))}

      {terraces.map((t) => (
        <mesh key={t.id} position={[0, t.y, t.z]} receiveShadow castShadow>
          <boxGeometry args={[t.width, 1.25, t.depth]} />
          <meshStandardMaterial
            color={isNight ? '#162033' : '#334155'}
            roughness={0.85}
          />
        </mesh>
      ))}

      {valleyLights.map((vl) => (
        <mesh key={vl.id} position={[vl.x, -0.45, vl.z]}>
          <boxGeometry args={[0.35, 0.15, 0.35]} />
          <meshBasicMaterial
            color={vl.color}
            transparent
            opacity={isNight ? 0.9 : 0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

function HillsideHouses({ isNight }) {
  const houses = useMemo(() => {
    const palette = [
      '#c2410c',
      '#ea580c',
      '#ec4899',
      '#06b6d4',
      '#f59e0b',
      '#10b981',
      '#8b5cf6',
      '#e11d48',
      '#d97706'
    ];
    const items = [];
    let seed = 13;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let row = 0; row < 11; row++) {
      const yBase = row * 1.15 + 0.6;
      const zBase = 8 - row * 1.65;
      const maxSpan = 14.5 - row * 0.45;

      for (let x = -maxSpan; x <= maxSpan; x += 1.75) {
        if (Math.abs(x) < 2.2) continue;

        const w = 1.2 + rand() * 0.45;
        const h = 1.1 + rand() * 1.15;
        const d = 1.2 + rand() * 0.45;
        const xOffset = x + (rand() - 0.5) * 0.35;
        const zOffset = zBase + (rand() - 0.5) * 0.45;
        const color = palette[Math.floor(rand() * palette.length)];
        const roofColor = rand() > 0.45 ? '#7c2d12' : '#64748b';

        items.push({
          id: `${row}-${x.toFixed(1)}`,
          pos: [xOffset, yBase + h / 2, zOffset],
          size: [w, h, d],
          color,
          roofColor
        });
      }
    }
    return items;
  }, []);

  return (
    <group>
      {houses.map((house) => {
        const [w, h, d] = house.size;
        const [px, py, pz] = house.pos;
        return (
          <group key={house.id} position={[px, py, pz]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[w, h, d]} />
              <meshStandardMaterial color={house.color} roughness={0.65} />
            </mesh>

            <mesh position={[0, h / 2 + 0.12, 0]} rotation={[0.12, 0, 0]}>
              <boxGeometry args={[w + 0.16, 0.14, d + 0.2]} />
              <meshStandardMaterial color={house.roofColor} roughness={0.5} metalness={0.3} />
            </mesh>

            <mesh position={[-w * 0.22, 0.1, d / 2 + 0.01]}>
              <planeGeometry args={[0.24, 0.28]} />
              <meshStandardMaterial
                color={isNight ? '#fef08a' : '#bae6fd'}
                emissive={isNight ? '#f59e0b' : '#0284c7'}
                emissiveIntensity={isNight ? 2.4 : 0.2}
              />
            </mesh>
            <mesh position={[w * 0.22, 0.1, d / 2 + 0.01]}>
              <planeGeometry args={[0.24, 0.28]} />
              <meshStandardMaterial
                color={isNight ? '#fde047' : '#bae6fd'}
                emissive={isNight ? '#ea580c' : '#0284c7'}
                emissiveIntensity={isNight ? 2.1 : 0.2}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function OutdoorEscalators({ isNight }) {
  const stepsGroupRef = useRef();

  const sections = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      const y = 1.4 + i * 1.75;
      const z = 7.0 - i * 2.45;
      const xShift = i % 2 === 0 ? -0.25 : 0.25;
      arr.push({ id: i, x: xShift, y, z });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (stepsGroupRef.current) {
      const t = (state.clock.getElapsedTime() * 0.6) % 1;
      stepsGroupRef.current.position.y = t * 0.25;
      stepsGroupRef.current.position.z = -t * 0.35;
    }
  });

  return (
    <group>
      {sections.map((sec) => (
        <group key={sec.id} position={[sec.x, sec.y, sec.z]}>
          <mesh rotation={[0.58, 0, 0]} castShadow>
            <boxGeometry args={[1.45, 0.35, 3.1]} />
            <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.35} />
          </mesh>

          <mesh position={[-0.65, 0.28, 0]} rotation={[0.58, 0, 0]}>
            <boxGeometry args={[0.08, 0.16, 3.05]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#06b6d4"
              emissiveIntensity={isNight ? 1.8 : 0.5}
            />
          </mesh>
          <mesh position={[0.65, 0.28, 0]} rotation={[0.58, 0, 0]}>
            <boxGeometry args={[0.08, 0.16, 3.05]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#06b6d4"
              emissiveIntensity={isNight ? 1.8 : 0.5}
            />
          </mesh>

          <mesh position={[0, 1.15, 0]} rotation={[0.58, 0, 0]} castShadow>
            <boxGeometry args={[2.1, 0.14, 3.25]} />
            <meshStandardMaterial
              color="#ff5a1f"
              emissive="#ea580c"
              emissiveIntensity={isNight ? 0.85 : 0.2}
              roughness={0.3}
            />
          </mesh>

          <mesh position={[0, 0.8, -1.35]}>
            <boxGeometry args={[2.6, 0.25, 1.3]} />
            <meshStandardMaterial color="#475569" roughness={0.7} />
          </mesh>
        </group>
      ))}

      <group ref={stepsGroupRef}>
        {sections.map((sec) => (
          <mesh key={`step-${sec.id}`} position={[sec.x, sec.y + 0.18, sec.z]} rotation={[0.58, 0, 0]}>
            <boxGeometry args={[1.15, 0.08, 0.35]} />
            <meshStandardMaterial
              color="#f59e0b"
              emissive="#f59e0b"
              emissiveIntensity={1.2}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function ProceduralMurals({ isNight }) {
  const muralConfigs = useMemo(
    () => [
      {
        id: 'm1',
        pos: [-3.8, 3.8, 5.2],
        rot: [0, 0.25, 0],
        size: [3.2, 1.65],
        palette: ['#ec4899', '#8b5cf6', '#06b6d4'],
        label: 'MEMORY & PEACE'
      },
      {
        id: 'm2',
        pos: [-5.6, 6.0, 2.6],
        rot: [0, 0.35, 0],
        size: [3.5, 1.8],
        palette: ['#f59e0b', '#ef4444', '#10b981'],
        label: 'GRAFFITOUR C13'
      },
      {
        id: 'm3',
        pos: [4.2, 4.8, 4.1],
        rot: [0, -0.3, 0],
        size: [3.2, 1.65],
        palette: ['#06b6d4', '#3b82f6', '#ec4899'],
        label: 'RESILIENCE'
      },
      {
        id: 'm4',
        pos: [6.0, 5.8, 2.0],
        rot: [0, -0.35, 0],
        size: [3.4, 1.75],
        palette: ['#10b981', '#eab308', '#a855f7'],
        label: 'CASA KOLACHO'
      },
      {
        id: 'm5',
        pos: [-4.4, 8.6, -0.8],
        rot: [0, 0.2, 0],
        size: [3.0, 1.55],
        palette: ['#f97316', '#ec4899', '#06b6d4'],
        label: 'LOCAL ARTISANS'
      },
      {
        id: 'm6',
        pos: [0.0, 11.4, -4.2],
        rot: [0, 0, 0],
        size: [4.6, 2.1],
        palette: ['#ec4899', '#f59e0b', '#06b6d4'],
        label: 'WE ARE COMUNA 13'
      }
    ],
    []
  );

  const textures = useMemo(
    () => muralConfigs.map((m, idx) => createMuralTexture(idx + 1, m.palette, m.label)),
    [muralConfigs]
  );

  return (
    <group>
      {muralConfigs.map((m, idx) => (
        <group key={m.id} position={m.pos} rotation={m.rot}>
          <mesh position={[0, 0, -0.08]} castShadow>
            <boxGeometry args={[m.size[0] + 0.2, m.size[1] + 0.2, 0.14]} />
            <meshStandardMaterial color="#1e293b" />
          </mesh>
          <mesh>
            <planeGeometry args={m.size} />
            <meshStandardMaterial
              map={textures[idx]}
              emissive="#ffffff"
              emissiveMap={textures[idx]}
              emissiveIntensity={isNight ? 0.55 : 0.15}
              roughness={0.4}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function MetrocableSystem({ isNight }) {
  const cabin1Ref = useRef();
  const cabin2Ref = useRef();

  const startPt = useMemo(() => new THREE.Vector3(14, 2.5, 9), []);
  const endPt = useMemo(() => new THREE.Vector3(7.5, 13.5, -7.5), []);

  useFrame((state) => {
    const t1 = (state.clock.getElapsedTime() * 0.08) % 1;
    const t2 = (t1 + 0.5) % 1;
    if (cabin1Ref.current) {
      cabin1Ref.current.position.lerpVectors(startPt, endPt, t1);
    }
    if (cabin2Ref.current) {
      cabin2Ref.current.position.lerpVectors(endPt, startPt, t2);
    }
  });

  return (
    <group>
      <mesh position={[14, 1.25, 9]}>
        <cylinderGeometry args={[0.18, 0.35, 5.5, 8]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.7} />
      </mesh>
      <mesh position={[7.5, 10.5, -7.5]}>
        <cylinderGeometry args={[0.18, 0.35, 6.5, 8]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.7} />
      </mesh>

      <group ref={cabin1Ref}>
        <mesh>
          <boxGeometry args={[0.95, 0.85, 0.95]} />
          <meshStandardMaterial
            color="#10b981"
            emissive={isNight ? '#10b981' : '#000000'}
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>

      <group ref={cabin2Ref}>
        <mesh>
          <boxGeometry args={[0.95, 0.85, 0.95]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive={isNight ? '#f59e0b' : '#000000'}
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>
    </group>
  );
}

/**
 * Louvre & UNESCO Style 3D Exhibition Pedestals & Floating Real-Photo Gallery Frames.
 */
function HotspotMarkers({ selectedHotspot, onSelectHotspot }) {
  const ringRefs = useRef([]);

  useFrame((state) => {
    const scale = 1 + Math.sin(state.clock.getElapsedTime() * 3.2) * 0.16;
    ringRefs.current.forEach((ring) => {
      if (ring) {
        ring.scale.set(scale, scale, scale);
      }
    });
  });

  return (
    <group>
      {HOTSPOTS.map((spot, idx) => {
        const isSelected = selectedHotspot?.id === spot.id;
        return (
          <group key={spot.id} position={spot.coordinates}>
            {/* UNESCO-Style Illuminated Pedestal Base in 3D */}
            <mesh position={[0, -0.35, 0]}>
              <cylinderGeometry args={[0.42, 0.55, 0.7, 16]} />
              <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.3} />
            </mesh>

            {/* Pulsing 3D Halo */}
            <mesh
              ref={(el) => (ringRefs.current[idx] = el)}
              onClick={(e) => {
                e.stopPropagation();
                onSelectHotspot(spot, 'photos');
              }}
            >
              <sphereGeometry args={[0.48, 16, 16]} />
              <meshBasicMaterial
                color={spot.color}
                transparent
                opacity={isSelected ? 0.85 : 0.42}
              />
            </mesh>

            <mesh
              onClick={(e) => {
                e.stopPropagation();
                onSelectHotspot(spot, 'photos');
              }}
            >
              <sphereGeometry args={[0.26, 16, 16]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive={spot.color}
                emissiveIntensity={1.8}
              />
            </mesh>

            {/* Louvre-Style Floating Framed Exhibit Card in 3D Space */}
            <Html position={[0, 1.35, 0]} center distanceFactor={24} zIndexRange={[30, 0]}>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectHotspot(spot, 'photos');
                }}
                style={{
                  width: '150px',
                  background: 'rgba(8, 12, 24, 0.92)',
                  border: `2px solid ${spot.color}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: isSelected
                    ? `0 0 28px ${spot.color}`
                    : '0 10px 25px rgba(0,0,0,0.8)',
                  transition: 'transform 0.2s ease'
                }}
                title={`Click to open ${spot.name} (Real Photos, 3D Object, YouTube Video & 360 Street View)`}
              >
                <div style={{ position: 'relative', height: '78px', width: '100%' }}>
                  <img
                    src={spot.heroImage}
                    alt={spot.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '5px',
                      left: '5px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: spot.color,
                      color: '#050811',
                      fontWeight: 900,
                      fontSize: '0.7rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {spot.number}
                  </span>
                </div>
                <div style={{ padding: '0.35rem 0.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {spot.name}
                  </div>
                  <div style={{ fontSize: '0.58rem', color: '#fbbf24', fontWeight: 700 }}>
                    Click: 3D · Photos · Video · 360°
                  </div>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export default function Scene3D({
  activeStop,
  selectedHotspot,
  onSelectHotspot,
  isNight,
  freeExplore
}) {
  return (
    <div className="canvas-wrapper">
      <Canvas
        shadows
        camera={{ position: [0, 24, 44], fov: 45, near: 0.1, far: 220 }}
        dpr={[1, 1.75]}
      >
        <color attach="background" args={[isNight ? '#050812' : '#0f243c']} />
        <fog attach="fog" args={[isNight ? '#050812' : '#0f243c', 28, 95]} />

        <ambientLight intensity={isNight ? 0.38 : 1.15} color={isNight ? '#93c5fd' : '#fffbeb'} />
        <directionalLight
          position={isNight ? [-18, 28, 15] : [24, 36, 22]}
          intensity={isNight ? 0.55 : 1.85}
          color={isNight ? '#818cf8' : '#fef08a'}
          castShadow
        />

        <pointLight
          position={[0, 7, 3]}
          intensity={isNight ? 3.2 : 0.8}
          distance={26}
          color="#ff5a1f"
        />
        <pointLight
          position={[-6, 7, 2]}
          intensity={isNight ? 2.5 : 0.6}
          distance={20}
          color="#ec4899"
        />
        <pointLight
          position={[6, 7, 2]}
          intensity={isNight ? 2.5 : 0.6}
          distance={20}
          color="#06b6d4"
        />
        <pointLight
          position={[0, 12, -3]}
          intensity={isNight ? 2.8 : 0.7}
          distance={22}
          color="#f59e0b"
        />

        {isNight && (
          <Stars radius={80} depth={40} count={2400} factor={4} saturation={0} fade speed={1} />
        )}
        <Sparkles
          count={isNight ? 140 : 75}
          scale={[36, 18, 28]}
          position={[0, 8, 0]}
          size={isNight ? 3.2 : 2.2}
          speed={0.45}
          color={isNight ? '#fbbf24' : '#fde047'}
        />

        <ValleyAndHillside isNight={isNight} />
        <HillsideHouses isNight={isNight} />
        <OutdoorEscalators isNight={isNight} />
        <ProceduralMurals isNight={isNight} />
        <MetrocableSystem isNight={isNight} />
        <HotspotMarkers
          selectedHotspot={selectedHotspot}
          onSelectHotspot={onSelectHotspot}
        />

        <CameraController
          activeStop={activeStop}
          selectedHotspot={selectedHotspot}
          freeExplore={freeExplore}
        />
      </Canvas>
    </div>
  );
}
