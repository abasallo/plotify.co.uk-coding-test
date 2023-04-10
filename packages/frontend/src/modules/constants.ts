const backendUrl: string =
  process.env.REACT_BACKEND_HOST && process.env.REACT_BACKEND_PORT
    ? `http://${process.env.REACT_BACKEND_HOST}:${process.env.REACT_BACKEND_PORT}`
    : 'http://localhost:4000'
export default {
  BACKEND_URL: backendUrl,

  GRAPHQL_BACKEND_URL: `${backendUrl}/graphql`,

  RANDOM_FACT_ENDPOINT: 'https://uselessfacts.jsph.pl/random.json',

  ROUTE_URL_ROOT: '/',
  ROUTE_URL_COMPANY: '/company',
  ROUTE_URL_COMPANY_PARAMS: ':companyId',
  ROUTE_URL_RANDOM_FACT: '/random-fact',

  COPYRIGHT_TEXT: 'Copyright © ',
  COPYRIGHT_LINK: 'https://www.linkedin.com/in/abasallo/',
  COPYRIGHT_LINK_TEXT: 'alvaro@basallo.es'
}
