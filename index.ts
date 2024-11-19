export const addUp = (a: number, b: number): number => {
  return a + b;
};

export const viewName = (name: string): string => {
  return name;
};

export const zero = (a: number): number => {
  return a - a;
};

interface iProps {
  name: string;
  id: number;
}
export const objData = (name: string): iProps => {
  return { id: 3, name };
};
export const extract = (name: string): string => {
  return `Hello ${name}, welcome to CodeLab`;
};

let student: Array<string> = ["Peter", "Amaka", "James"];

export const newStudent = (name: string): Array<string> => {
  let x = [...student, name];

  return x;
};

export const dataFN = (numb: number): number => {
  return parseInt(numb.toString().split("").reverse().join(""));
};

console.log(dataFN(227));
