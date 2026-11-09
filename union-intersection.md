# Combine Union (|) and Intersection (&) Types in TypeScript

## Introduction
We use  Union (|) and Intersection (&) in Typescript to combine different types. A Union allows a variable to select one of several possible types, whereas an Intersection combines multiple types into a single type that contains all their properties.

## Detailed Explanation
Let's understand this using an example. Imagine we are developing a University Management System. In this system, Faculty and Students have different roles when using a particular feature. For example, faculty members can upload course materials, while students can only view those materials.

Now, both faculty and students have some common information like ID and name. So instead of writing these common properties separately for both, we can create a common type called BasicInfo and use Intersection (&) to combine it with their specific properties.

But here comes another problem. We need to allow the system to accept both Faculty and Student information. For this, we can use Union (|) to represent either a Faculty or a Student. By combining both, we can create one type that contains the common information and allows different roles.

### Code
```ts
type CommonData = {
  id: number;
  name: string;
};

type Faculty = {
  role: "faculty";
  coursesTaught: string[];
};

type Student = {
  role: "student";
  enrolledCourses: string[];
};

type UniversityUser = CommonData & (Faculty | Student);

function accessCourse(user: UniversityUser) {
  console.log(user.name);
  if (user.role === "faculty") {
    console.log("Upload course materials");
  } else {
    console.log("View course materials");
  }
}
```
# Conclusion
Combining Union and Intersection types helps us create flexible and reusable type structures. It allows us to share common properties while supporting different roles without repeating the same code.
