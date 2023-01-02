import React from 'react'

const Accordion = ({ items }) => {
  const renderedItemList = items?.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
        <br />
      </div>
    );
  })
  return (
    <div>{renderedItemList}</div>
  )
}

export default Accordion