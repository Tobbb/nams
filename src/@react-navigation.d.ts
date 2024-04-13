import {AllNavigationParams} from './navigation/types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllNavigationParams {}
  }
}
