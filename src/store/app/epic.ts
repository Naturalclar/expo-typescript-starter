import { Epic, ofType } from 'redux-observable'
import { from } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import * as actions from './actions'
import { ActionType } from 'typesafe-actions'
import { IAppState } from 'store/types'
import { AppChangeLanguage } from './services'


type Action = ActionType<typeof actions>

export const AppChangeLanguageEpic: Epic<Action, Action, IAppState> = (action) =>
    action.pipe(
        ofType(actions.APP_LANGUAGE_CHANGE),
        switchMap(({ payload }) =>
            from(AppChangeLanguage(payload))
                .pipe(
                    map(actions.AppLanguageChanged),
                ),
        ),
    )
