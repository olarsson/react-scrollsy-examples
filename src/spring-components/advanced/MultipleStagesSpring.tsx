/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import { lerpRounded } from "../../functions/utils";

export const MultipleStagesSpring = memo(
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
          range: [0.0, 0.2, 0.3, 0.4, 0.6, 0.7, 1.0],
          output: [0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 3.0],
          extrapolate: "clamp",
        })
        .to((s) => {
          let rgba = "";
          if (s >= 0 && s <= 1) {
            // black to white
            // 0,0,0 to 255,255,255
            rgba = `rgba(${lerpRounded(0, 255, s)},${lerpRounded(0, 255, s)},${lerpRounded(0, 255, s)}, 0.8)`;
          } else if (s > 1 && s < 2) {
            // white to blue
            // 255,255,255 to 0,0,255
            rgba = `rgba(${lerpRounded(255, 0, s - 1)},${lerpRounded(255, 0, s - 1)},255, 0.8)`;
          } else if (s >= 2 && s <= 3) {
            // blue to red
            // 0,0,255 to 255,0,0
            rgba = `rgba(${lerpRounded(0, 255, s - 2)},0,${lerpRounded(255, 0, s - 2)}, 0.8)`;
          }
          return rgba;
        })
    );

    return (
      <div className='elem elem--showcase-multiple-stages' ref={ref}>
        <animated.div
          className='elem__progress-bar'
          style={{
            width: widthSpring,
            backgroundColor: bgColorSpring,
          }}
        />
        <strong>I use react-spring</strong>
        <p>I track the scroll progress of the element and change the background color several times in the process.</p>
        <p>Black &gt; White &gt; Blue &gt; Red</p>
        <h2>progress: {progress}</h2>
      </div>
    );
  })
);
