Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

Reducers are a pure function with (state, action) => state signature. It describes how an action transforms the state into the next state. The shape of the state is up to you: it can be a primitive, an array, an object, or even an Immutable.js data structure. The only important part is that you should not mutate the state object, but return a new object if the state changes.

[Learn more](https://redux.js.org/basics/reducers)
