/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, forwardRef } from "react";
import { lerpRounded } from "../functions/utils";

export const ParallaxVerticalSpringA = memo(
  forwardRef(({ progress }: any, ref: any) => {
    return (
      <div
        className='elem elem--parallax-2'
        style={{
          transform: `translateY(${lerpRounded(0, 150, progress)}%)`,
        }}
        ref={ref}>
        <div
          className='elem__progress-bar'
          style={{
            width: `${progress * 100}%`,
          }}
        />
        <strong>I do not use react-spring</strong>
        <p>I track the scroll progress of this element.</p>
        <h2>progress: {progress}</h2>
      </div>
    );
  })
);
