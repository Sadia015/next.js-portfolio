import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#f542cb] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] hover:bg-[#6e1e5c]'>{props.textName}</button>
    </>
  )
}

export default Button