import { combineEpics } from 'redux-observable'
import { AppChangeLanguageEpic } from 'store/app/epic';
// Import epic here

const epics = [
    AppChangeLanguageEpic
    // Insert epic here
]

const rootEpic: any = combineEpics(...epics)

export default rootEpic
