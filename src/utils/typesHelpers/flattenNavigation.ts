import {RootStackParamList} from '../../navigation/types'

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${P}`
    : never
  : never

type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? // eslint-disable-next-line no-undef
          `${K}` | Join<K, Paths<T[K], P[D]>>
        : never
    }[keyof T]
  : ''

export type NestedObjectPaths = Paths<RootStackParamList>
