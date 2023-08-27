/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring } from "@react-spring/web";

export const LogoSpring = memo(
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

    const [cubeRotationSpring] = useState(() =>
      scroll
        .to({
          range: [0.0, 1.0],
          output: [0, 360],
          extrapolate: "clamp",
        })
        .to((s) => `rotateX(${s}deg) rotateY(${s}deg)`)
    );

    return (
      <div className='react-scrollsy-3d' ref={ref}>
        <div className='cube-container'>
          <animated.div
            className='cube'
            style={{
              transform: cubeRotationSpring,
            }}>
            <div className='face front'>
              <span>@react-scrollsy</span>
            </div>
            <div className='face back'></div>
            <div className='face right'></div>
            <div className='face left'></div>
            <div className='face top'></div>
            <div className='face bottom'></div>
          </animated.div>
        </div>
      </div>
    );
  })
);
