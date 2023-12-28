/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, memo, forwardRef } from "react";
import { animated, useSpring } from "@react-spring/web";

export const HorizontalSliderSpring = memo(
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

    const [transformXSpring] = useState(() =>
      scroll
        .to({
          range: [0.0, 1.0],
          output: [75, -50],
          extrapolate: "clamp",
        })
        .to((s) => `translateX(${s}%)`)
    );

    const transformSpring = (range: number[]) =>
      scroll
        .to({
          range,
          output: [0.95, 1.1, 1.0, 1.0],
          extrapolate: "clamp",
        })
        .to((s) => `scale(${s})`);

    const opacitySpring = (range: number[]) =>
      scroll
        .to({
          range,
          output: [0.25, 1],
          extrapolate: "clamp",
        })
        .to((s) => s);

    const [fakeImage1TransformSpring] = useState(() => transformSpring([0.0, 0.15, 0.25, 1.0]));
    const [fakeImage1OpacitySpring] = useState(() => opacitySpring([0.0, 0.15]));

    const [fakeImage2TransformSpring] = useState(() => transformSpring([0.25, 0.4, 0.5, 1.0]));
    const [fakeImage2OpacitySpring] = useState(() => opacitySpring([0.25, 0.4]));

    const [fakeImage3TransformSpring] = useState(() => transformSpring([0.5, 0.65, 0.75, 1.0]));
    const [fakeImage3OpacitySpring] = useState(() => opacitySpring([0.5, 0.65]));

    const [fakeImage4TransformSpring] = useState(() => transformSpring([0.75, 0.9, 1.0, 1.0]));
    const [fakeImage4OpacitySpring] = useState(() => opacitySpring([0.75, 0.9]));

    return (
      <>
        <div className='elem elem--horizontal-slider' ref={ref}>
          <strong>I use react-spring</strong>
          <p>
            I track the scroll progress of this element and use an offset to the top to delay scroll actions. As i finish the progress of the element
            I leave the last two items visible using the logic inside the transform spring values (0, 75).
          </p>
          <h2>progress: {progress}</h2>
          <animated.div
            className='elem--horizontal-slider__container'
            style={{
              transform: transformXSpring,
            }}>
            <animated.div
              style={{ transform: fakeImage1TransformSpring, opacity: fakeImage1OpacitySpring }}
              className='elem--horizontal-slider__container--fake-img bg-ultra-violet'
            />
            <animated.div
              style={{ transform: fakeImage2TransformSpring, opacity: fakeImage2OpacitySpring }}
              className='elem--horizontal-slider__container--fake-img bg-blush'
            />
            <animated.div
              style={{ transform: fakeImage3TransformSpring, opacity: fakeImage3OpacitySpring }}
              className='elem--horizontal-slider__container--fake-img bg-ultra-violet'
            />
            <animated.div
              style={{ transform: fakeImage4TransformSpring, opacity: fakeImage4OpacitySpring }}
              className='elem--horizontal-slider__container--fake-img bg-saffron'
            />
          </animated.div>
        </div>
      </>
    );
  })
);
