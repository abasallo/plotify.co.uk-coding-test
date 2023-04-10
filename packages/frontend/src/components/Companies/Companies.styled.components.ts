import styled from 'styled-components'

import { Card, CardActions, Grid } from '@material-ui/core'

import MaterialUIContainer from '@material-ui/core/Container'

export const Container = styled(MaterialUIContainer)`
  display: flex;
  flex-direction: column;
`

export const CompaniesGrid = styled(Grid)`
  flex-grow: 1;
`
export const CompanyComponent = styled(Card)`
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  min-height: 100px;
  text-align: center;
`

export const CompanyActions = styled(CardActions)`
  text-align: right;
`
