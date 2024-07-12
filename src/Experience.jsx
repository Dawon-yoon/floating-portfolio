import { Text,Html,ContactShadows,PresentationControls,Float,Environment,useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Experience()
{
    const { viewport } = useThree()
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    
    const scale = viewport.width / 9

    return <>
        <Environment preset='city' />
        
        <color args={['#241a1a']} attach="background" />
        
        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{mass:4, tension:400}}
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#ff6900'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0,0.55,-1.15]}
                />
                <primitive
                    object={computer.scene}
                    scale={ scale}
                    position-y={-1.1}
                >
                    <Html
                        wrapperClass='htmlScreen'
                        transform
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.256}
                    >
                        <iframe src="https://yoondawon-html-portfolio.netlify.app/"/>
                    </Html>
                    <Text
                        font='./bangers-v20-latin-regular.woff'
                        fontSize={1}
                        position={[2, 1.8, 0.5]}
                        rotation-y={-1.25}
                        maxWidth={2}
                        textAlign='center'
                    >
                        YOON DAWON
                    </Text>
                </primitive>
            </Float >
        </PresentationControls>

        <ContactShadows
            opacity={0.4}
            scale={5}
            blur={2.5}
            position-y={-1.4} />
    </>
}