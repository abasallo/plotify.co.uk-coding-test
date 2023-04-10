import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Grid } from '@material-ui/core'

import { CompanyComponent, CompanyActions, CompaniesGrid, Container } from './Companies.styled.components'

import { Company } from 'plotify.co.uk-coding-test-shared'

import { getCompanies } from '../../services/company'

import constants from '../../modules/constants'

const Companies = () => {
  const navigate = useNavigate()

  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    const dataFetch = async () => setCompanies(await getCompanies())
    dataFetch()
  }, [])

  const handleDetailsClick = (companyId: number) => navigate(`${constants.ROUTE_URL_COMPANY}/${companyId}`)

  return (
    <Container>
      <CompaniesGrid container spacing={2}>
        {companies.map((company: Company) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={company.id}>
            <CompanyComponent onClick={() => handleDetailsClick(company.id)}>
              <CompanyActions disableSpacing>{company.name}</CompanyActions>
            </CompanyComponent>
          </Grid>
        ))}
      </CompaniesGrid>
    </Container>
  )
}

export default Companies
