import React from 'react';
// import './DragWindow.css';

const MoveableDiv = (props)=> {

  console.log(props);
  const {h, w, x, y} = props.item;
  const {index} = props;
  console.log(h, w, x, y);
  console.log(index);

  let offsetX,offsetY
  const moveWindow = event => {

    const eventTarget = event.target
    eventTarget.style.left = `${event.pageX-offsetX}px`
    eventTarget.style.top = `${event.pageY-offsetY}px`
  }
  const addWindow = event => {
    const eventTarget=event.target

    offsetX = event.clientX-eventTarget.getBoundingClientRect().left
    offsetY = event.clientY-eventTarget.getBoundingClientRect().top

    eventTarget.addEventListener('mousemove',moveWindow)
  }
  const removeWindow = event => {
    const eventTarget = event.target
    eventTarget.removeEventListener('mousemove',moveWindow)
  }

  return (
    <div onMouseDown={addWindow} onMouseUp={removeWindow}>
      <div style={{top: `${x}%`, left: `${y}%`, width: `${w}%`, height: `${h}%`}} className={`item`}>
          Item {index +1}
      </div>
    </div>
  )
}

export default React.memo(MoveableDiv);