import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { initializeLanguage, setLanguage } from "./language.actions";
import { selectLanguage } from "./language.selector";
import { LanguageState } from "./language.state";


@Injectable({ 
    providedIn: 'root' 
})
export class LanguageFacade {
    
    public readonly language$ = this._languageStore.pipe(select(selectLanguage));

    constructor(
        private _languageStore: Store<LanguageState>
    ) {}

    public setLanguage(language: string): void {
        this._languageStore.dispatch(setLanguage({ language }));
    };
    
    public initializeLanguage(): void {
        this._languageStore.dispatch(initializeLanguage());
    };

}