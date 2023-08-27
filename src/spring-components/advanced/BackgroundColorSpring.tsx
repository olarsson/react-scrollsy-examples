/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import { lerpRounded } from "../../functions/utils";

export const BackgroundColorSpring = memo(
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

    const [bgColorSpring] = useState(() =>
      scroll
        .to({
          range: [0.0, 1.0],
          output: [0, 1],
          extrapolate: "clamp",
        })
        .to((s) => `rgba(${lerpRounded(229, 248, s)}, ${lerpRounded(79, 198, s)}, ${lerpRounded(109, 48, s)}, 0.7)`)
    );

    return (
      <div className='elem-showcase-background-color' ref={ref}>
        <animated.div
          className='progress-bar'
          style={{
            width: widthSpring,
            backgroundColor: bgColorSpring,
          }}
        />
        <strong>I use react-spring</strong>
        <p>I track the scroll progress of the element and change the background color.</p>
        <h2>progress: {progress}</h2>
      </div>
    );
  })
);
