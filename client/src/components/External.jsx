import React, { useRef, useEffect } from 'react';

function ExternalScript({ src }) {
  const ref = useRef();

  useEffect(() => {
    const element = document.createElement("script");
    element.src = src;
    ref.current.append(element);
  }, [src]);

  return <div ref={ref} />;
};

function ExternalCSS({ href }) {
    const ref = useRef();

    useEffect(() => {
        const element = document.createElement("link");
        element.href = href;
        element.rel = 'stylesheet';
        ref.current.append(element);
    }, [href]);

    return <div ref={ref} />;
}

export default {
    ExternalScript,
    ExternalCSS,
}
