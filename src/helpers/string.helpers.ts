import { API_WEATHER_ICON_URL } from './../shared/constants';
import _ from 'lodash';
import axios from 'axios';
const json = await axios.get('configuration.json')
export const getIndexFromIdName = (name: string): number => {
    const length = name.length;
    return Number(name.split('-')[length - 1]);
};

export const removeBlankString = (str: string): string => {
    return _.trim(str);
};

export const standardizeString = (str: string): string => {
    return _.capitalize(removeBlankString(str));
};

export const toLowerString = (str: string): string => {
    return _.toLower(str);
};
export const toUpperCase = (str: string): string => {
    return _.upperCase(str);
};

export const checkIfStringIncludes = (str: string) => {};

export const toKebabCase = (str: string): string => {
    return _.kebabCase(str);
};

export function checkIfStringHave(str: string, subStr: string): boolean {
    return _.includes(str, subStr);
}
export const getQueryString = (URL: string, query: any) => {
 const queryParams = new URLSearchParams(query).toString();

 return `${URL}&${queryParams}`;
};

export const lowerCase = (str: string) => {
    return _.lowerCase(str);
};

export const getIconWeatherString = (icon?: string) => {
    if (!icon) {
        return '';
    }
    return `${API_WEATHER_ICON_URL}${icon}@2x.png`;
};

export function capitalizeString(str: string) {
    return _.capitalize(str);
}

export function stringWithoutSpaces(str: string) {
    return _.trim(str);
}
