/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import { interpolate } from "flubber";

const svgPaths = [
  "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
  "M7 2v11h3v9l7-12h-4l4-8z",
];

const interpolatedPath = interpolate(svgPaths[0], svgPaths[1], {
  maxSegmentLength: 0.5,
});

export const SvgAnimation = memo(
  forwardRef(({ progress }: any, ref: any) => {
    const [{ scroll }, setScroll] = useSpring(() => ({
      scroll: 0,
      config: {
        mass: 20,
        tension: 150,
        friction: 14,
        clamp: true,
      },
    }));

    useEffect(() => {
      setScroll.start({
        scroll: progress,
      });
    });

    const [pathSpring] = useState(() =>
      scroll
        .to({
          range: [0, 1],
          output: [0, 1],
          extrapolate: "clamp",
        })
        .to((s) => interpolatedPath(s))
    );

    const [widthSpring] = useState(() =>
      scroll
        .to({
          range: [0.0, 1.0],
          output: [0, 100],
          extrapolate: "clamp",
        })
        .to((s) => `${s}%`)
    );

    return (
      <div className='elem-elem2-progress' ref={ref}>
        <animated.div
          className='progress-bar'
          style={{
            width: widthSpring,
          }}></animated.div>
        <strong>I use react-spring and flubber</strong>
        <p>I track the scroll progress of this element in relation to the viewport and transform the paths of an SVG.</p>
        <p>My offset to the top is 50% of the viewport height.</p>
        <p>My offset to the bottom is 200px.</p>
        <h2>progress: {progress}</h2>

        <svg
          className='svg-animation'
          width='960'
          height='500'
          xmlns='http://www.w3.org/2000/svg'>
          <g transform='translate(240 10) scale(20 20)'>
            <animated.path d={pathSpring} fill='black' stroke='lightgray' />
          </g>
        </svg>
      </div>
    );
  })
);
