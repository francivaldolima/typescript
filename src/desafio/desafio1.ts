let employee: {
    code: 10;
    name: "John";
  };
  
  interface Employee {
    code: number;
    name: string;
  }
  
  const John: Employee = {
    code: 123,
    name: "John",
  };
  
  const employee2: { name: string, code: number} = {
    code: 348,
    name: "Maria",
  };
  
  
  console.log(employee2);
  console.log(John);