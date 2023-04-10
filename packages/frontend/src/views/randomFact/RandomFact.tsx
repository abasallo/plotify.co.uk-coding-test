import { useEffect, useState } from 'react'

import { fetchRandomFact } from '../../services/randomFact'

import { withMainContainer } from '../../templates/withMainContainer'

const RandomFact = () => {
  const [randomFact, setRandomFact] = useState<string>('')

  useEffect(() => {
    const dataFetch = async () => setRandomFact(await fetchRandomFact())
    dataFetch()
  }, [])

  return <h1>{randomFact}</h1>
}

export default withMainContainer(RandomFact)
