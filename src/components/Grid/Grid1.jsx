import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./Grid1.module.css";

const Grid1 = () => {
  return (
<div className=' bg-gray-200 m-4'>
<div className="grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-3 gap-2 md:gap-2   bg-gray-300 m-4">
      {/* <div className="hidden md:block md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">0</div>
      <div className="hidden md:block md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">1</div>
      <div className="hidden md:block md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">2</div>
      <div className="hidden md:block md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">3</div>
      <div className="hidden md:block md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-2 bg-gray-300 rounded-md p-10">4</div> */}
      
    </div>
</div>
  )
}

export default Grid1