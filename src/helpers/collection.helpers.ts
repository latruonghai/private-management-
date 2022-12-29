import _ from 'lodash';


export const filterObject = <T>(obj: T[], filter: any) => {
    return _.filter(obj, filter);
};

export const findIndexObjectByProperties = <T>(obj: T[], filter: any): number => {
    return _.findIndex(obj, filter);
};
