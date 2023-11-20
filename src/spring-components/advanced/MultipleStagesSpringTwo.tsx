/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring, to } from "@react-spring/web";
import { lerp } from "../../functions/utils";

export const MultipleStagesSpringTwo = memo(
  forwardRef(({ progress }: any, ref: any) => {
    // <Basic scroll settings>
    const [{ scroll }, setScroll] = useSpring(() => ({
      scroll: 0,
      config: {
        mass: 3,
        tension: 40,
        friction: 14.5,
        clamp: false,
      },
    }));

    const [{ scrollTwo }, setScrollTwo] = useSpring(() => ({
      scrollTwo: 0,
      config: {
        mass: 2,
        tension: 90,
        friction: 10,
        clamp: false,
      },
    }));

    useEffect(() => {
      setScroll.start({
        scroll: progress,
      });
      setScrollTwo.start({
        scrollTwo: progress,
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

    const [borderRadiusSpring] = useState(() =>
      scroll
        .to({
          range: [0.0, 1.0],
          output: [0, 10],
          extrapolate: "clamp",
        })
        .to((s) => `${s}%`)
    );

    const [transformSpringScale] = useState(() =>
      scroll
        .to({
          range: [0.0, 0.3, 0.4, 1.0],
          output: [0.0, 1.0, 1.0, 2.0],
          extrapolate: "clamp",
        })
        .to((s) => {
          let transform = 0;
          if (s >= 0 && s <= 1) {
            transform = lerp(0.6, 1.2, s);
          } else if (s > 1) {
            transform = lerp(1.2, 1.0, s - 1);
          }
          return transform;
        })
    );

    const [transformSpringRotate] = useState(() =>
      scrollTwo
        .to({
          range: [0.0, 0.4, 0.7, 1.0],
          output: [0, 1, 2, 3],
        })
        .to((s) => {
          let transform = 0;
          if (s >= 0 && s <= 1) {
            transform = lerp(0, 20, s);
          } else if (s > 1 && s < 2) {
            transform = lerp(20, 10, s - 1);
          } else if (s >= 2) {
            transform = lerp(10, 90, s - 2);
          }
          return transform;
        })
    );

    const transforms = to([transformSpringScale, transformSpringRotate], (a, b) => [`scale(${a}) rotate(${b}deg) translate3d(-50%, -50%, 0)`]);

    return (
      <div className='elem elem--showcase-multiple-stages-b' ref={ref}>
        <animated.div
          className='elem__progress-bar'
          style={{
            width: widthSpring,
          }}
        />
        <animated.div
          className='elem__shape'
          style={{
            transform: transforms,
            borderRadius: borderRadiusSpring
          }}
        />
        <strong>I use react-spring</strong>
        <p>
          I track the scroll progress of the element and perform mulitple transforms (scale, rotate) on the same shape using different physics, ranges and outputs for each transform
          property. In addition i also perform a border-radius change, for no reason what so ever.
        </p>
        <p>I also use offests both to the top and bottom.</p>
        <h2>progress: {progress}</h2>
      </div>
    );
  })
);
