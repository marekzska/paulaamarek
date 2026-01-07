import React from "react";

interface WavyTextProps {
  text: string;
  emoji: string;
}

export const WavyText: React.FC<WavyTextProps> = ({ text, emoji }) => {
  // Repeat pattern multiple times
  const repeatedPattern = Array(100)
    .fill(null)
    .map((_, i) => (
      <React.Fragment key={i}>
        <tspan>{text}</tspan>
        <tspan dx="16"> </tspan>
        <tspan>{emoji}</tspan>
        <tspan dx="16"> </tspan>
      </React.Fragment>
    ));

  // Calculate wave parameters based on number of waves
  const waveWidth = 200; // Base width for each wave cycle
  const amplitude = 78; // Wave depth (from center to peak)
  const centerY = 65;
  const peakY = centerY - amplitude;

  // Generate the path for the specified number of waves
  const generateWavePath = () => {
    let path = `M-100,${centerY} Q0,${peakY} 100,${centerY}`;
    // Add additional wave segments
    for (let i = 1; i < 40; i++) {
      path += ` T${100 + i * waveWidth},${centerY}`;
    }
    return path;
  };

  return (
    <div className="w-full overflow-hidden py-8">
      <svg
        width="100%"
        height="250"
        xmlns="http://www.w3.org/2000/svg"
        className="wavy-text-svg"
        viewBox="0 0 8000 150"
        preserveAspectRatio="xMinYMid slice"
      >
        <defs>
          {/* Define the wavy path dynamically */}
          <path id="wavyPath" d={generateWavePath()} fill="transparent" />
        </defs>

        {/* Animated text on path */}
        <text
          className="text-darker"
          fontSize="18"
          fontWeight="600"
          fontFamily="sansita"
        >
          <textPath href="#wavyPath" startOffset="0%">
            {repeatedPattern}
            <animate
              attributeName="startOffset"
              from="0%"
              to="-100%"
              dur="240s"
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
  );
};
