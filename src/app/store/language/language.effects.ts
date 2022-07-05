import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TranslateService } from "@ngx-translate/core";
import { map, tap } from "rxjs";

import { initializeLanguage, initializeLanguageFailure, initializeLanguageSuccess, setLanguage } from "./language.actions";
import { LocalStorageService } from "../../services/local-storage.service";
import { Language } from "../../interfaces/enums/language.enum";


@Injectable()
export class LanguageEffects { 
    
    initializeLanguage$ = createEffect(() => this._actions$
        .pipe(
            ofType(initializeLanguage),
            map(() => {
                const language = this._localStorageService.getData(Language.LANGUAGE);
                if (language) {
                    this._translateService.use(language);
                    return initializeLanguageSuccess({ language });
                }
                this._translateService.use('en');
                return initializeLanguageFailure();
            })
        )
    );

    firstLanguageInitialization$ = createEffect(() => this._actions$
        .pipe(
            ofType(initializeLanguageFailure),
            map(() => setLanguage({ language: 'en' }))
        )
    );

    setLanguage$ = createEffect(() => this._actions$
        .pipe(
            ofType(setLanguage),
            tap((state) => {
              this._localStorageService.saveData(
                Language.LANGUAGE,
                state.language,
              );
              this._translateService.use(state.language);
            })
        ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private _actions$: Actions,
        private _localStorageService: LocalStorageService,
        private _translateService: TranslateService
    ) {}
}
