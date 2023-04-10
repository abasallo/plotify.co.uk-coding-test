import { useParams } from 'react-router-dom'

import Phases from '../../components/Phases/Phases'

import { withMainContainer } from '../../templates/withMainContainer'

const Main = () => {
  const routeParams = useParams()
  const companyId: string | undefined = routeParams.companyId
  return <Phases companyId={companyId} />
}
export default withMainContainer(Main)
