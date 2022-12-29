import type { TaskItem } from '../typings/props';

import _ from 'lodash';

export function checkExistElement(
    elements: any,
    elementContent: string,
    properties: string
) {
    return (
        _.filter(elements, (o: any) => {
            return o[properties] === elementContent;
        }).length != 0
    );
}

export function numberOfExistElement(elements: any[], el: any) {
    return _.filter(elements, (o) => {
        return o === el;
    }).length;
}
export function findExistElementByProperties(
    elements: any[],
    elementContent: string,
    properties: string
) {
    return _.find(elements, (o: any) => {
        return o[properties] === elementContent;
    });
}
export function numberOfExistObjectElement(
    elements: TaskItem[],
    el: string,
    properties: string
) {
    return _.filter(elements, (o: any) => {
        return o[properties] === el;
    }).length;
}

export function findItem(elements: any[], el: any, properties: string) {
    return _.find(elements, (o) => {
        return o[properties] === el;
    });
}

export function reverseArray(arr: any[]): void {
    _.reverse(arr);
}
