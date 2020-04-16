import React from 'react';



//TRANSITION BETWEEN PAGE
export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay)
  else
    timeline = getDefaultTimeline(node, delay)

  timeline.play()
}
//TRANSITION BETWEEN PAGE
export const playOff = (node) => {
  let timeline
  timeline = getDefaultTimelineOff(node);
  timeline.play()
}




//FUNCTION WHEN HOME PAGE
const getHomeTimeline = (node, delay) => {
  const timeline = new TimelineMax({ paused: true });
  timeline
    .from(node, 0.5, { display: 'none', autoAlpha: 0, delay })

  return timeline
}


//FUNCTION WHEN OTHER PAGE
const getDefaultTimeline = (node, delay) => {
  const timeline = new TimelineMax({ paused: true });
  // const texts = node.querySelectorAll('h1 > div');

  timeline
    .from(node, .5, { display: 'none', autoAlpha: 0, delay })
    // .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline
}


//FUNCTION WHEN OTHER PAGE
const getDefaultTimelineOff = (node) => {
  const timeline = new TimelineMax({ paused: true });
  timeline
    .to(node, 1, { autoAlpha: 0, delay:0 })
    // .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline
}

export default AppTransition;
