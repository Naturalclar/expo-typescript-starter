import { combineEpics } from 'redux-observable'
import { AppChangeLanguageEpic } from 'store/app/epic';

const epics = [
    AppChangeLanguageEpic
]

const rootEpic: any = combineEpics(...epics)

export default rootEpic
