import React from 'react'

export const WavyText: React.FC = () => {
    // Repeat the text many times to ensure continuous coverage
    const repeatedText = Array(30)
        .fill('We\'re getting married ❤︎   ')
        .join('')

    return (
        <div className="w-full overflow-hidden py-8">
            <svg
                width="100%"
                height="120"
                xmlns="http://www.w3.org/2000/svg"
                className="wavy-text-svg"
                viewBox="0 0 1000 120"
                preserveAspectRatio="none"
            >
                <defs>
                    {/* Define the wavy path - 2.5 waves across viewBox */}
                    <path
                        id="wavyPath"
                        d="M-100,60 Q0,0 100,60 T300,60 T500,60 T700,60 T900,60 T1100,60 T1300,60 T1500,60 T1700,60 T1900,60 T2100,60 T2300,60 T2500,60"
                        fill="transparent"
                    />
                </defs>

                {/* Animated text on path */}
                <text className="text-darker" fontSize="18" fontWeight="600">
                    <textPath href="#wavyPath" startOffset="0%">
                        {repeatedText}
                        <animate
                            attributeName="startOffset"
                            from="0%"
                            to="-100%"
                            dur="60s"
                            repeatCount="indefinite"
                        />
                    </textPath>
                </text>
            </svg>

            <style>{`
        .wavy-text-svg {
          display: block;
        }

        .text-darker {
          fill: #C72939;
        }
      `}</style>
        </div>
    )
}
