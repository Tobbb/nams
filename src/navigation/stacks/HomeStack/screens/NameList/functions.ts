import {NameListItemType} from '../../../../../utils/DataManager/types'
import {faList} from '@fortawesome/free-solid-svg-icons/faList'
import {faPalette} from '@fortawesome/free-solid-svg-icons/faPalette'
import {faArrowDownAZ} from '@fortawesome/free-solid-svg-icons/faArrowDownAZ'
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

type sortTypes = 'default' | 'color' | 'alphabetical' | 'stars'
export const iconsAndSorting: {sorting: sortTypes; icon: IconDefinition}[] = [
  {
    sorting: 'default',
    icon: faList,
  },
  {
    sorting: 'color',
    icon: faPalette,
  },
  {
    sorting: 'alphabetical',
    icon: faArrowDownAZ,
  },
  {
    sorting: 'stars',
    icon: faStar,
  },
]
export const sortList = (
  list: NameListItemType[],
  sortMethod: sortTypes,
): NameListItemType[] => {
  if (sortMethod === 'default') {
    return list
  }
  const sortedList = [...list]
  if (sortMethod === 'alphabetical') {
    sortedList.sort((a, b) => a.name.localeCompare(b.name))
  }
  if (sortMethod === 'color') {
    sortedList.sort((a, b) => a.colorTag.localeCompare(b.colorTag))
  }
  if (sortMethod === 'stars') {
    sortedList.sort(
      (a, b) =>
        b.rating.reduce((sum, item) => sum + item.stars, 0) -
        a.rating.reduce((sum, item) => sum + item.stars, 0),
    )
  }

  return sortedList
}
