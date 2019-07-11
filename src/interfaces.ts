import { EffectType } from 'dva';
import { Location, Action } from 'history';
import { match } from 'react-router';
import { Dispatch } from 'redux';

export interface DvaModelOptions {
    // dva model namespace
    namespace?: string;
    // dva model state
    state?: any;
}

export interface EffectOptions {
    type: EffectType;
    // 当 type 为 throttle 时使用，设置节流时间
    ms?: number;
}

export interface SubscriptionOptions {
    strict?: boolean; // 当为true时，在确定位置是否与当前url匹配时，将考虑位置路径名上的尾部斜线
    exact?: boolean; // 当为true时，仅当url完全匹配
    sensitive?: boolean;
}

export interface SubscriptionPath {
    url: string;
    options?: SubscriptionOptions;
    listener: (matchResult: match<any>, dispatch: Dispatch, location: Location, action: Action) => void;
}
