import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import {PASTEL_COLORS} from '../../styles/colors'

export type nameDataItem = {
  name: string
  icon: IconDefinition
  color: string
  uuid: string
  source: 'local' | 'remote'
  data: NameListItemType[]
}

export type nameRating = {
  author: string | undefined
  stars: number
}

export type NameListItemType = {
  name: string
  id: string
  colorTag: (typeof PASTEL_COLORS)[number]
  rating: nameRating[]
}
