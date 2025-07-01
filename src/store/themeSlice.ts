import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// createSlice is the core abstraction in Redux Toolkit.
// createSlice automatically : 1. creates action types, 2. creates action creators, 3. creates the reducer

// Payload Action : a Typescript heler type for actions that carry a payload ( for example setting the theme to 'dark' )


type Theme = 'light' | 'dark'
// Theme : a type alias restricting values to 'light' or 'dark'


interface ThemeState {
    theme: Theme
}
// ThemeState: describes the shape of this slice's state, i.e. an object with one field

const initialState: ThemeState = {
    theme: 'light',
}
// this defines the default theme before any user interaction. it gets persisted later by Redux Persist


// let's create the slice
const themeSlice = createSlice({
    name: 'theme', // slice name (used in action types like theme/toggleTheme)
    initialState, // the state it manages
    reducers: {
        toggleTheme: (state) => { // toggleTheme: does not have a payload , flips between 'light' and 'dark'
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
        setTheme: (state, action: PayloadAction<Theme>) => { // setTheme: Accepts a payload , Uses PayloadAction<Theme> to ensure only 'light' | 'dark' is allowed
            state.theme = action.payload
        },
    },
})

// Redux Toolkit uses Immer under the hood
// which means you can mutate state directly
// and it handles immutability behind the scenes

export const { toggleTheme, setTheme } = themeSlice.actions
// toggleTheme and setTheme are auto-generated action creators


export default themeSlice.reducer
// themeSlice.reducer is the actual reducer function we pass into redux store