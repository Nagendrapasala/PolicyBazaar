import React from 'react'

export const Userdetails = (data,dispatch) => {
  dispatch({
    type:"user",
    payload:data
  })
}
