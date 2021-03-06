import React from "react";

function Card(props) {
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const dragEnd = (e) => {
    if (e.target.style.display === "none") {
      e.target.style.display = "block";
    }
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragEnd}
    >
      {props.children}
      <span onClick={()=> props.deleteCard(props.id)} className="delete-button">x</span>
    </div>
  );
}

export default Card;
