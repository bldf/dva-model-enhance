import { EffectsCommandMap as DvaEffectsCommandMap } from 'dva';
import { take, cancel } from 'redux-saga/effects';
export interface Put {
    <A extends object = any>(action: A): any;
    resolve<A extends object = any>(action: A): Promise<any>;
}
export interface Select<StoreState> {
    <T = StoreState>(fn: (state: T) => any): any;
}
export interface EffectsCommandMap<StoreState> extends DvaEffectsCommandMap {
    put: Put;
    call<Fn extends (...args: any[]) => any>(fn: Fn, ...args: Parameters<Fn>): any;
    select: Select<StoreState>;
    take: typeof take;
    cancel: typeof cancel;
    [key: string]: any;
}
declare class BaseModel<CurrentState extends object, StoreState extends object> {
    protected effects: EffectsCommandMap<StoreState>;
    protected state: CurrentState;
    setState(state: Partial<CurrentState>): CurrentState & Partial<CurrentState>;
}
export default BaseModel;
