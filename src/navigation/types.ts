export type HomeStackScreens = {
  selectName: undefined
  createName: undefined
}
export type ProfileStackScreens = {
  login: undefined
  register: undefined
}

export type TabStacks = {
  homeStack: HomeStackScreens
  profileStack: ProfileStackScreens
}

export type RootStackParamList = {
  TabStacks: undefined
  /* Modals listed below */
  NewNameProject: undefined
}

export type AllNavigationParams = HomeStackScreens &
  ProfileStackScreens &
  TabStacks &
  RootStackParamList
