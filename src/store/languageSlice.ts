import {
    createSlice, // generates the reducer + actions for the language feature
    PayloadAction // used to strongly type the payload in actions
} from '@reduxjs/toolkit'

type Language = 'en' | 'fa' | 'de'  // restrict values to 'en' or 'fa' or 'de'

interface LanguageState { // describes the shape of this state slice
    language: Language // this helps TypeScript catch mistakes e.g. if someone tryies to set the language to 'es' which is unsupported here
}

const initialState: LanguageState = {
    language: 'en', // here we set english as the default app language
    // like the theme , this will be persisted using Redux Persist
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload // setLanguage: takes a payload ('en' or 'fa' or 'de') and updates the state
        },
    },
})

// again, thanks to immer (used under the by redux toolit) , we can mutate state directyly without breaking Redux's immutability rule

export const { setLanguage } = languageSlice.actions
// setLanguage: the action creator you'll dispatch in your component

export default languageSlice.reducer
// the actual reducer logic that gets combined in store.ts
