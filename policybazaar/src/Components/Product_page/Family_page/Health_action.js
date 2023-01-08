import React from 'react'

export const Health_action = (data,dispatch) => {
  dispatch({
    type:"health",
    payload:data
  })
}
