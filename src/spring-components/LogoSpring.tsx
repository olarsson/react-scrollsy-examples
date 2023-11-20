/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring } from "@react-spring/web";

export const LogoSpring = memo(
  forwardRef(({ progress }: any, ref: any) => {
    // <Basic scroll settings>
    const [{ scroll }, setScroll] = useSpring(() => ({
      scroll: 0,
      config: {
        mass: 3,
        tension: 100,
        friction: 14.5,
        clamp: false,
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
        })
        .to((s) => `rotateX(${s}deg) rotateY(${s}deg)`)
    );

    return (
      <div className='react-scrollsy-3d' ref={ref}>
        <div className='react-scrollsy-3d__container'>
          <animated.div
            className='react-scrollsy-3d__container--cube'
            style={{
              transform: cubeRotationSpring,
            }}>
            <div className='react-scrollsy-3d__container--face react-scrollsy-3d__container--face__front'>
              <span>react-scrollsy</span>
            </div>
            <div className='react-scrollsy-3d__container--face react-scrollsy-3d__container--face__back'></div>
            <div className='react-scrollsy-3d__container--face react-scrollsy-3d__container--face__right'></div>
            <div className='react-scrollsy-3d__container--face react-scrollsy-3d__container--face__left'></div>
            <div className='react-scrollsy-3d__container--face react-scrollsy-3d__container--face__top'></div>
            <div className='react-scrollsy-3d__container--face react-scrollsy-3d__container--face__bottom'></div>
          </animated.div>
        </div>
      </div>
    );
  })
);
