import {AllNavigationParams} from './navigation/types'

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends AllNavigationParams {}
  }
}
