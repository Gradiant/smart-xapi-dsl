export const values = <T extends object>(item: T) => Object.values(item);

export const difference = (list1: any[], list2: any[]) => [...new Set(list1)].filter(item => !list2.includes(item));

export const differenceWith = (cb: (item1: any, item2: any) => boolean, list1: any[], list2: any[]) => {
  return [...new Set(list1)].filter(list1item => !list2.some(list2item => cb(list1item, list2item)));
};
