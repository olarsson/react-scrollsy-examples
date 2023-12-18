/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring } from "@react-spring/web";

export const ParallaxVerticalSpringB = memo(
  forwardRef(({ progress }: any, ref: any) => {
    // <Basic scroll settings>
    const [{ scroll }, setScroll] = useSpring(() => ({
      scroll: 0,
      config: {
        mass: 0,
        tension: 0,
        friction: 0,
        clamp: true,
      },
    }));

    useEffect(() => {
      setScroll.start({
        scroll: progress,
      });
    });

    // </Basic scroll settings>

    const [transformSpring] = useState(() =>
      scroll
        .to({
          range: [0.0, 1.0],
          output: [0, 300],
          extrapolate: "clamp",
        })
        .to((s) => `translateY(${s}%)`)
    );

    return (
      <animated.div
        className='elem elem--parallax-3'
        style={{
          transform: transformSpring,
        }}
        ref={ref}>
        <div
          className='elem__progress-bar'
          style={{
            width: `${progress * 100}%`,
          }}
        />
        <strong>I use react-spring, but with no physics enabled</strong>
        <p>I track the scroll progress of this element.</p>
        <h2>progress: {progress}</h2>
      </animated.div>
    );
  })
);
