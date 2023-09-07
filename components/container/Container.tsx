// import React, { ReactNode } from "react";

// type containerProps = {
//     className?:string
//     children?:ReactNode
// }

// const Container = (props:containerProps) => {
//   return (
//     <div
//       className={`container p-8 mx-auto xl:px-0 ${
//         props.className ? props.className : ""
//       }`}>
//       {props.children}
//     </div>
//   );
// }

// export default Container;

import clsx from 'clsx'

 function Container({ className, ...props }) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    />
  )
}

export default Container