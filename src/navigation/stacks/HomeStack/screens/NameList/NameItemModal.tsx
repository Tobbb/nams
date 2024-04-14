import {Modal, Pressable, ScrollView, StyleSheet, View} from 'react-native'
import {NameListItemType} from '../../../../../utils/DataManager/types'
import {StarGroup} from '../../../../../components/features/StarGroup'
import {InfoFetcher} from '../../../../../components/features/infoFetcher'
import {useEffect, useState} from 'react'
import {NewProjectButtonGroup} from '../../../../../containers/ButtonGroups/NewProjectButtonGroup'
import {PASTEL_COLORS} from '../../../../../styles/colors'
import uuid from 'react-native-uuid'
import {useNames} from '../../../../../utils/DataManager/DataManager'
import {BtnGroup} from './NameItemModal/BtnGroup'
import {ModalHeader} from './NameItemModal/ModalHeader'

type props = {
  showing: boolean
  onRequestClose(): void
  item: NameListItemType
  project: string
  new: boolean
}

export const NameItemModal = (props: props) => {
  const {addNameToProject, updateNameInProject, deleteNameInProject} =
    useNames()
  const [item, setItem] = useState<NameListItemType>(
    JSON.parse(JSON.stringify(props.item)),
  )
  useEffect(() => {
    setItem(JSON.parse(JSON.stringify(props.item)))
  }, [props.item])

  const handleEditStars = (stars: number, author: string | undefined) => {
    const nextItem = {...item}
    nextItem.rating = item.rating.map(rating => {
      if (rating.author === author) {
        rating.stars = stars
        return rating
      }
      return rating
    })
    setItem(nextItem)
  }

  const updateValue = (updateObject: object) => {
    const newItem = {
      ...item,
      ...updateObject,
    }
    setItem(newItem)
  }

  const handleSave = () => {
    if (props.new) {
      const saveItem = {
        ...item,
        id: uuid.v4() as string,
      }
      addNameToProject(props.project, saveItem)
    } else {
      updateNameInProject(props.project, item)
    }
    props.onRequestClose()
  }

  const handleDelete = () => {
    deleteNameInProject(props.project, item)
    props.onRequestClose()
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.showing}
      onRequestClose={() => {
        props.onRequestClose()
      }}>
      <Pressable onPress={() => props.onRequestClose()}>
        <View style={styles.transparentOverlay}>
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.contentContainer}>
            <Pressable style={styles.innerContainer}>
              <ModalHeader
                new={props.new}
                updateValue={updateValue}
                name={props.item.name}
              />
              {item.rating.map(rating => {
                return (
                  <StarGroup
                    key={rating.author ?? 'key'}
                    onPress={star => handleEditStars(star, rating.author)}
                    author={rating.author}
                    stars={rating.stars}
                  />
                )
              })}
              {props.item?.name && !props.new && (
                <InfoFetcher name={props.item.name} />
              )}
              <NewProjectButtonGroup<string>
                items={PASTEL_COLORS as unknown as string[]}
                size={20}
                onPress={i => {
                  updateValue({colorTag: i as (typeof PASTEL_COLORS)[number]})
                }}
              />
            </Pressable>
            <BtnGroup
              onSave={handleSave}
              onDelete={handleDelete}
              selectedColor={item.colorTag as string}
              isNew={props.new}
            />
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {flex: 1, width: '80%'},
  transparentOverlay: {
    backgroundColor: 'rgba(0,0,0,.2)',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerContainer: {
    alignContent: 'center',
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  contentContainer: {
    bottom: '-20%',
    width: '100%',
    maxHeight: '70%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
})
