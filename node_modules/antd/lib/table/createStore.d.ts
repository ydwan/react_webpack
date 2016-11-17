export interface Store {
    setState: (Object) => void;
    getState: () => any;
    subscribe: (listener: () => void) => () => void;
}
export default function createStore(initialState: any): Store;
