import * as http from 'http'

import axios from 'axios'

import { ReasonPhrases, StatusCodes } from 'http-status-codes'

import { app } from '../src/app'

const TEST_SERVER_PORT = 4001

let server: http.Server

beforeAll(async () => {
  server = app.listen({ port: TEST_SERVER_PORT }, () => console.log(`Test Server initialised on port: ${TEST_SERVER_PORT}`))
})

afterAll(() => {
  server.close()
})

describe('Server E2E tests', () => {
  describe('Health Check E2E tests', () => {
    test('Expected response for Health Check', async () => {
      const { status, statusText, data } = await axios({
        method: 'get',
        url: `http://localhost:${TEST_SERVER_PORT}/`
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot()
    })
  })

  describe('Company E2E tests', () => {
    test('GetCompanies', async () => {
      const { status, statusText, data } = await axios({
        method: 'post',
        url: `http://localhost:${TEST_SERVER_PORT}/graphql/`,
        data: {
          query: `
            query GetCompanies {
              getCompanies {
                id,
                name
              }
            }
            `
        }
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot()
    })
  })

  describe('Phase E2E tests', () => {
    test('GetPhases', async () => {
      const { status, statusText, data } = await axios({
        method: 'post',
        url: `http://localhost:${TEST_SERVER_PORT}/graphql/`,
        data: {
          query: `
              query GetPhases($companyId: String!) {
                getPhases(companyId: $companyId) {
                  id,
                  name
                }
              }
            `,
          variables: {
            companyId: '1'
          }
        }
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot()
    })
  })

  describe('Task E2E tests', () => {
    test('GetTasks', async () => {
      const { status, statusText, data } = await axios({
        method: 'post',
        url: `http://localhost:${TEST_SERVER_PORT}/graphql/`,
        data: {
          query: `
              query GetTasks($phaseId: String!) {
                getTasks(phaseId: $phaseId) {
                  id,
                  text,
                  completed
                }
              }
            `,
          variables: {
            phaseId: '1'
          }
        }
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot()
    })

    test('ToggleTaskCompletion', async () => {
      const { status, statusText, data } = await axios({
        method: 'post',
        url: `http://localhost:${TEST_SERVER_PORT}/graphql/`,
        data: {
          query: `
            mutation ToggleTaskCompletion($id: ID!) {
              toggleTaskCompletion(id: $id) {
                id,
                text,
                completed
              }
            }
          `,
          variables: {
            id: 1
          }
        }
      })

      expect(status).toEqual(StatusCodes.OK)
      expect(statusText).toEqual(ReasonPhrases.OK)

      expect(data).toMatchSnapshot({
        data: {
          toggleTaskCompletion: {
            completed: expect.any(Boolean)
          }
        }
      })
    })
  })
})
