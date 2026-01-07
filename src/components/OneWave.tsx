import React from 'react'

interface WavyTextProps {
    text: string
    emoji: string
    waves?: number // Number of full waves to display (default: 2)
}

export const OneWave: React.FC<WavyTextProps> = ({ text, emoji }) => {
    // Repeat pattern multiple times
    const repeatedPattern = Array(100).fill(null).map((_, i) => (
        <React.Fragment key={i}>
            <tspan>{text}</tspan>
            <tspan dx="16"> </tspan>
            <tspan>{emoji}</tspan>
            <tspan dx="16"> </tspan>
        </React.Fragment>
    ))

    const wavePath = "M0,100 Q100,55 200,100 T400,100 T600,100 T800,100 T1000,100 T1200,100 T1400,100 T1600,100 T1800,100 T2000,100 T2200,100 T2400,100 T2600,100 T2800,100 T3000,100 T3200,100 T3400,100 T3600,100 T3800,100 T4000,100"

    return (
        <div className="w-full overflow-hidden py-8">
            <svg
                width="100%"
                height="180"
                xmlns="http://www.w3.org/2000/svg"
                className="wavy-text-svg"
                viewBox="0 0 4000 150"
                preserveAspectRatio="xMinYMid slice"
            >
                <defs>
                    {/* Single wave path peaking at center */}
                    <path
                        id="wavyPath2"
                        d={wavePath}
                        fill="transparent"
                    />
                </defs>

                {/* Animated text on path */}
                <text className="text-lighter" fontSize="18" fontWeight="600" fontFamily='sansita'>
                    <textPath href="#wavyPath2" startOffset="0%">
                        {repeatedPattern}
                        <animate
                            attributeName="startOffset"
                            from="0%"
                            to="-100%"
                            dur="180s"
                            repeatCount="indefinite"
                        />
                    </textPath>
                </text>
            </svg>

            <style>{`
        .wavy-text-svg {
          display: block;
        }

        .text-lighter {
          fill: #E57B7D;
        }
      `}</style>
        </div>
    )
}
