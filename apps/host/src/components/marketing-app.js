import React from 'react';
import { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingModule';

export default () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
