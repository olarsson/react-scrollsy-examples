/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring } from "@react-spring/web";

export const BasicProgress = memo(
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
      <div className='elem elem--page-progress elem--fixed-top' ref={ref}>
        <animated.div
          className='elem__progress-bar'
          style={{
            width: widthSpring,
          }}
        />
        <div className='elem--page-progress__content'>
          <strong>I use react-spring</strong>
          <p>I track the scroll progress of this document, and rotate this cube from 0 to 360 degress while doing so.</p>
          <h2>progress: {progress}</h2>
        </div>

        <div className='elem--cube-container'>
          <animated.div
            className='elem--cube-container__cube'
            style={{
              transform: cubeRotationSpring,
            }}>
            <div className='elem--cube-container__cube--face elem--cube-container__cube--face__front'></div>
            <div className='elem--cube-container__cube--face elem--cube-container__cube--face__back'></div>
            <div className='elem--cube-container__cube--face elem--cube-container__cube--face__right'></div>
            <div className='elem--cube-container__cube--face elem--cube-container__cube--face__left'></div>
            <div className='elem--cube-container__cube--face elem--cube-container__cube--face__top'></div>
            <div className='elem--cube-container__cube--face elem--cube-container__cube--face__bottom'></div>
          </animated.div>
        </div>
      </div>
    );
  })
);
