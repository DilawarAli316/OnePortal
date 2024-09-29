import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Grid2 = () => {
  return (
<div class="grid grid-cols-3 md:grid-cols-5 grid-rows-3 md:grid-rows-4 gap-2 md:gap-2 m-4">
      <div class="hidden md:block md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">0</div>
      <div class="hidden md:block md:col-start-2 md:row-start-1 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">1</div>
      <div class="hidden md:block md:col-start-4 md:row-start-1 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">2</div>
      <div class="hidden md:block md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">3</div>
      <div class="hidden md:block md:col-start-2 md:row-start-2 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">4</div>
      <div class="hidden md:block md:col-start-4 md:row-start-2 md:col-span-2 md:row-span-2 bg-gray-300 rounded-md p-10">5</div>
      <div class="hidden md:block md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">6</div>
      <div class="hidden md:block md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">7</div>
      <div class="hidden md:block md:col-start-1 md:row-start-4 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">9</div>
      <div class="hidden md:block md:col-start-4 md:row-start-4 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">10</div>
      <div class="hidden md:block md:col-start-4 md:row-start-4 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">10</div>
      <div class="hidden md:block md:col-start-3 md:row-start-3 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">11</div>
      <div class="hidden md:block md:col-start-3 md:row-start-4 md:col-span-1 md:row-span-1 bg-gray-300 rounded-md p-10">12</div>
      
    </div>
  )
}

export default Grid2