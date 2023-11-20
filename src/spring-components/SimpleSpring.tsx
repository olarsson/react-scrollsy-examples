/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring } from "@react-spring/web";

export const SimpleSpring = memo(
  forwardRef(({ progress }: any, ref: any) => {
    // <Basic scroll settings>
    const [{ scroll }, setScroll] = useSpring(() => ({
      scroll: 0,
      config: {
        mass: 1,
        tension: 50,
        friction: 14.5,
        clamp: true,
      },
    }));

    useEffect(() => {
      setScroll.start({
        scroll: progress,
      });
    });

    // </Basic scroll settings>

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
      <div className='elem elem--mulitple-nested-b' ref={ref}>
        <animated.div
          className='elem__progress-bar'
          style={{
            width: widthSpring,
          }}
        />
        <strong>I use react-spring</strong>
        <p>I track the scroll progress of the element.</p>
        <h2>progress: {progress}</h2>
      </div>
    );
  })
);
