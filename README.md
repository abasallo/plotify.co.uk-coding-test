# Plotify Coding Test

## Prerequisites

- Node.js (use of [nvm](https://github.com/nvm-sh/nvm) recommended).
- Yarn (`npm install -g yarn`)

## Installation

 - Clone the repository

`git clone https://github.com/abasallo/plotify.co.uk-coding-test.git`

 - Install the dependencies

`yarn`

- Bootstrap the project

`yarn bootstrap`

## Available Scripts

In the project directory, you can run:

### `yarn build`

Builds all projects.

### `yarn lint`

Run the linter for all projects.

### `yarn test`

Launches the runner for Unit & Integration tests.

### `yarn start`

Starts all projects.

## Known shortcomings & Comments

 - A possible alternative solution to the reopening of a task would be to cascade, undo / unmark everyone from the initial up until the leaves of the tree. Both would cover the explicit functional requirements, maybe the alternative is more natural from a user perspective. I implemented the simplest approach that covers the requirements and in a real life situation I would have asked the client / product owner, but in absence of further information, Occam's razor approach.

 - A possible improvement would be to only fetch the Phase's tasks in the Backend when the GraphQL Query selects it, changing the appropriate implementation in the Resolver. Again, I tend strongly not to optimise before the necessity appears, though this is a clear grey case being a small synthetic exercise, most probably this would be something that would be initially implemented in a real life instance.

 - A known shortcoming is that the presentation order of the Phases in the UI is the same as in the database, for this exercise it matches the natural order in which it would be ordered, so I skipped it out of simplicity. In real life it should be ordered on fetch by following the property parentPhaseId up the tree.

 - Another known shortcoming is the absence of E2E Frontend coverage. Though it is included for the backend, out of complexity it is skipped for the frontend to try and make the exercise shorter. Of course, in a real life project, the shallow component rendering testing needs to be completed by a proper coverage of unit test for the logic (which is included) and proper E2E coverage of the UI (which is not) using, for example, Cypress. 
