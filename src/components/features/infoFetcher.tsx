import {useEffect, useState} from 'react'
import {ActivityIndicator, Text, View} from 'react-native'
import {parseResponse} from './infoFeatcher/funtions'

type props = {
  name: string
}
export const InfoFetcher = (props: props) => {
  const [nameMeaning, setNameMeaning] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    const getName = async () => {
      const response = await fetch(
        `https://historiska.se/nomina/?nomina_name=${props.name}`,
        {
          signal: controller.signal,
        },
      )
      const meaning = await parseResponse(response)
      setNameMeaning(meaning)
    }
    getName()
    return () => {
      controller.abort()
    }
  }, [props.name])

  return (
    <View>
      {nameMeaning === '' ? <ActivityIndicator /> : <Text>{nameMeaning}</Text>}
    </View>
  )
}
