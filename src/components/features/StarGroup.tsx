import {Pressable, StyleSheet, Text, View} from 'react-native'
import {nameRating} from '../../utils/DataManager/types'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons/faStar'
import {faStar} from '@fortawesome/free-regular-svg-icons/faStar'

const STARS = [...Array(5).keys()]

type props = nameRating & {
  onPress?(stars: number): void
}

export const StarGroup = (props: props) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.starContainer}>
        {STARS.map((star, i) => {
          return (
            <Pressable
              key={i}
              onPress={() => props.onPress && props.onPress(star + 1)}>
              <FontAwesomeIcon
                size={props.onPress ? 28 : 14}
                icon={star < props.stars ? faStarSolid : faStar}
              />
            </Pressable>
          )
        })}
      </View>
      {!props.onPress && <Text> ~ {props.author ?? 'Jag'}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
