import {parseResponse} from '../../../../src/components/features/infoFeatcher/funtions'

describe('InfoFetcher/Parse Response', () => {
  it('should parse response', async () => {
    // eslint-disable-next-line no-undef
    const response = new Response(
      `Härledning</p>\n\t\t\t\t\t\t<p class="result-data">test</p>`,
    )
    const result = await parseResponse(response)
    expect(result).toBe('test')
  })
  it('Give correct message on no match', async () => {
    // eslint-disable-next-line no-undef
    const response = new Response(`<p>test</p>`)
    const result = await parseResponse(response)
    expect(result).toBe('Hittade ingen information om namnet')
  })
})
