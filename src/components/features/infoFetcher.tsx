import {useEffect, useState} from 'react'
import {ActivityIndicator, Text, View} from 'react-native'

type props = {
  name: string
}
export const InfoFetcher = (props: props) => {
  const [nameMeaning, setNameMeaning] = useState('ddd')
  useEffect(() => {
    const controller = new AbortController()

    const getName = async () => {
      const response = await fetch(
        `https://historiska.se/nomina/?nomina_name=${props.name}`,
        {
          signal: controller.signal,
        },
      )
      const html = await response.text()
      const match = html.match(
        /(?<=Härledning<\/p>\n\t\t\t\t\t\t<p class="result-data">)(.*)(?=<\/p>)/gm,
      )
      setNameMeaning(
        match && match[0] ? match[0] : 'Hittade ingen information om namnet',
      )
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
