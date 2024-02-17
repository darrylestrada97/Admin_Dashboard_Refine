import { Popover,Button } from 'antd'
import React from 'react'

function CurrentUser() {
  return (
    <>
        <Popover 
        placement='bottomRight'
        trigger='click'
        overlayInnerStyle={{padding:0}}
        overlayStyle={{width:900}}
        >
            TEST

        </Popover>
    </>
  )
}

export default CurrentUser