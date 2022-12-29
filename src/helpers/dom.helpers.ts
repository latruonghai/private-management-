export const getElementInputContent = (idName: string): string => {
 const elementInput = document.getElementById(idName) as HTMLInputElement;
 const content: string = elementInput!.value;
 elementInput.value = '';

 return content;
};
