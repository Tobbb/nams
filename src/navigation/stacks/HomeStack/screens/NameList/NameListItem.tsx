import {Pressable, StyleSheet, Text, View} from 'react-native'
import {NameListItemType} from '../../../../../utils/DataManager/types'
import {FONTSIZE, FONTWEIGHT} from '../../../../../styles/font'
import {StarGroup} from '../../../../../components/features/StarGroup'
import Animated, {SlideInLeft, SlideOutRight} from 'react-native-reanimated'

type props = {
  item: NameListItemType
  onPress(item: NameListItemType): void
}
export const NameListItem = (props: props) => {
  return (
    <Animated.View entering={SlideInLeft}>
      <Pressable onPress={() => props.onPress(props.item)}>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Text style={styles.nameText}>{props.item.name}</Text>
            <View>
              {props.item.rating.map((rating, i) => {
                return (
                  <StarGroup
                    key={i}
                    author={rating.author}
                    stars={rating.stars}
                  />
                )
              })}
            </View>
          </View>
          <View
            style={[
              styles.tagContainer,
              {backgroundColor: props.item.colorTag},
            ]}
          />
        </View>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  tagContainer: {
    height: '100%',
    width: '60%',
    alignSelf: 'flex-end',
    left: '160%',
    transform: [{rotate: '-45deg'}],
  },
  infoContainer: {padding: 10},

  container: {
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  nameText: {
    fontSize: FONTSIZE.xl,
    fontWeight: FONTWEIGHT.semiBold,
  },
})
