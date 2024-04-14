// eslint-disable-next-line no-undef
export const parseResponse = async (response: Response): Promise<string> => {
  const html = await response.text()
  const match = html.match(
    /(?<=Härledning<\/p>\n\t{6}<p class="result-data">)(.*)(?=<\/p>)/gm,
  )
  return match && match[0] ? match[0] : 'Hittade ingen information om namnet'
}
