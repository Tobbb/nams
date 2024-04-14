import {sortList} from '../../../../src/navigation/stacks/HomeStack/screens/NameList/functions'
import {NameListItemType} from '../../../../src/utils/DataManager/types'

describe('Namelist/SortList', () => {
  let list: NameListItemType[] = []
  beforeEach(() => {
    list = [
      {
        name: 'bTest',
        id: 'test1',
        colorTag: '#D5E3F0',
        rating: [
          {
            author: undefined,
            stars: 5,
          },
        ],
      },
      {
        name: 'atest',
        id: 'test1',
        colorTag: '#FFE5EC',
        rating: [
          {
            author: undefined,
            stars: 1,
          },
        ],
      },
      {
        name: 'cTest',
        id: 'test1',
        colorTag: '#D5E3F0',
        rating: [
          {
            author: undefined,
            stars: 4,
          },
        ],
      },
    ]
  })

  it('should sort by alphabetical', () => {
    expect(sortList(list, 'alphabetical')).toBeSorted({key: 'name'})
  })
  it('should sort by color', () => {
    expect(sortList(list, 'color')).toBeSorted({key: 'colorTag'})
  })
  it('should sort by stars', () => {
    expect(sortList(list, 'stars')).toBeSorted({key: 'colorTag'})
  })
  it('should sort by default', () => {
    expect(sortList(list, 'default')).toEqual(list)
  })
})
