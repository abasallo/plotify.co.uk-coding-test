import axios from 'axios'
import constants from '../modules/constants'

export const fetchRandomFact = async (): Promise<string> => {
  const { data } = await axios.get(constants.RANDOM_FACT_ENDPOINT)
  return data.text
}
