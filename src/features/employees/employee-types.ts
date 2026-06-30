export type Employee = {
  id: string;
  name: string;
  department: {
    id: string;
    name: string;
  };
  salary: number;
  isActive: boolean;
};
