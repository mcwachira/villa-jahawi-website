import React, { ReactNode } from "react";

type containerProps = {
    className?:string
    children?:ReactNode
}

const Container = (props:containerProps) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;