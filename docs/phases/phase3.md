# Phase 3: Attends Model, API, and basic APIUtil (1.5 days)

## Rails
### Models
* Attends


### Controllers
* Api::AttendsController (create, destroy, index, update)

### Views

## Flux
### Views (React Components)
* Activity Feed
* AttendanceItem

### Stores
* Attends

### Actions
* ApiActions.receiveAllAttends -> triggered by ApiUtil
* ApiActions.receiveAllAttendsforUser
* ApiActions.receiveAllAttendsforArtist
* ApiActions.receiveSingleAttend
* ApiActions.deleteAttend
* NotebookActions.fetchAllAttends -> triggers ApiUtil
* NotebookActions.fetchAllAttendsforUser
* NotebookActions.fetchAllAttendsforArtist
* NotebookActions.fetchSingleNotebook
* NotebookActions.createNotebook
* NotebookActions.editNotebook
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllAttends
* ApiUtil.fetchSingleAttend
* ApiUtil.createAttend
* ApiUtil.editAttend
* ApiUtil.destroyAttend

## Gems/Libraries
