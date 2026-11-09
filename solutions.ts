function multiplyValue(value: number , multiplier?: number) : number{
  if( multiplier !== undefined){
    return value * multiplier;
  }
  else{
    return value * 2;
  }
}


function processInput(value: string | number | boolean): string | number {
  if ( typeof value === "string"){
    return value.trim().toLocaleLowerCase();
  }
  else if( typeof value === "number" ){
    return value * 10;
  }
  else{
    if (value == true){
      return "Active";
    }
    else{
      return "Inactive";
    }
  }
}


function formatCoordinate( pos: readonly [latitude: number, longitude: number, locationName: string]) : string{
  const [latitude, longitude, locationName] = pos;
  return `Location: ${locationName} (${latitude}, ${longitude})`
}


function concatenateArrays<T>(...arrays: T[][]) : T[]{
  return arrays.reduce((res , cur)=> res.concat(cur),[]);
}


interface Course{
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses( course: Course[], minStudents: number ) : Course[]{

  const ans : Course[] = [];
  for ( let i = 0 ; i < course.length ; i++ ){
    const value = course[i];
    if (value.isPublished === true && value.students >= minStudents){
      ans.push(value);
    }
  }
  return ans;
}


function pluckValues <T, K extends keyof T>(items: T[] , key: K) : T[K][] {
  let ans: T[K][] = [];
  for ( let i = 0 ; i < items.length ; i++ ){
    const item = items[i];
    ans.push(item[key]);
  }
  return ans;
}


class Employee{
  protected name: string;
  private baseSalary: number;

  constructor(
    name: string,
    baseSalary: number
  ){
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails() : string{
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}
class Manager extends Employee{
  private department: string;

  constructor(
    name: string,
    baseSalary: number,
    department: string
  ){
    super(name, baseSalary)
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



async function validateAgeAsync(age: number) : Promise<string>{
  if ( age >= 18 ){
    return new Promise((resolve) =>{
      setTimeout(()=>{
        resolve("Access Granted");
      }, 1000);
    });
  }
  else{
    throw  new Error("Access Denied: Must be 18 or older")
  }
}
