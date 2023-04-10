import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Checkbox, FormControlLabel, FormGroup, Grid } from '@material-ui/core'

import { Phase, Task } from 'plotify.co.uk-coding-test-shared'

import { PhaseComponent, PhaseActions, PhasesGrid, Container } from './Phases.styled.components'

import { getPhases } from '../../services/phase'
import { toggleTaskCompletion } from '../../services/task'

import { isComplete, toggleTaskById } from '../../modules/phase'

import constants from '../../modules/constants'

const Phases = (props: { companyId: string | undefined }) => {
  const navigate = useNavigate()

  const companyId: string | undefined = props.companyId

  const [phases, setPhases] = useState<Phase[]>([])

  useEffect(() => {
    if (companyId) {
      const dataFetch = async () => setPhases(await getPhases(companyId))
      dataFetch()
    }
  }, [])

  useEffect(() => {
    if (phases && phases.length !== 0 && isComplete(phases)) {
      navigate(constants.ROUTE_URL_RANDOM_FACT)
    }
  }, [phases])

  const onCheckboxClick = async (taskId: number) => {
    toggleTaskCompletion(taskId).then(() => setPhases(toggleTaskById(taskId, phases)))
  }

  return (
    <Container>
      <PhasesGrid container spacing={2}>
        {phases.map((phase: Phase) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={phase.id}>
            <PhaseComponent>
              <PhaseActions disableSpacing>{phase.name}</PhaseActions>
              <FormGroup>
                {phase.tasks &&
                  phase.tasks.map((task: Task) => (
                    <FormControlLabel
                      control={<Checkbox checked={task.completed} onClick={() => onCheckboxClick(task.id)} />}
                      label={task.text}
                      key={task.id}
                    />
                  ))}
              </FormGroup>
            </PhaseComponent>
          </Grid>
        ))}
      </PhasesGrid>
    </Container>
  )
}

export default Phases
