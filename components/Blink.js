import React, { Component, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export default function Blink() {

  const pict = {
    uri : 'https://4.bp.blogspot.com/-W-EqUfqBIIY/WkX47-Q-7PI/AAAAAAAAm8g/aynbxQ_d2CIiJ-oXjIPDw_tmcaaHBWroACLcBGAs/s1600/my-paradissi-2017-favorite-decor-trends-posts.jpg'
  }
  
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setIsShow(!isShow)
    }, 1000)
  }, [])

  return (
    <>
    <View>
    {isShow && (
      <Text>oooooooo</Text>
      )}
    </View>
     
    </>
  )
}