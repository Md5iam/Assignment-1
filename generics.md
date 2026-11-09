# How Do Generics Work in TypeScript, and How Do They Help with Asynchronous Promise<T> Responses?

# Introduction
Generics are type variables used to create classes, functions & type aliases without explicitly defining the types they use. This means we can reuse generic functions.

# Detailed Explanation
Let's understand this using an example. Lets say we are working with an API response. In a typical response there can be some key-value pairs we can get from the HTTP body, metadata and other things. But we don't need them; we only need some specific data. So if we don't want to use Generics, then what can we do? We can create some classes and map the values that are needed from the HTTP response. But the problem is, lets say we need to handle multiple responses, so for that we have to write separate code for each response. And eventually the code looks messy enough.

To solve this problem, we use Generics. They allow us to define a general type structure using a placeholder type. When working with a specific response, we can specify the actual data type we expect.
## Code Examples
```ts
interface User {
  name: string;
  role: string;
}
interface Product {
  id: number;
  title: string;
}
interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
}
async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const response = (await res.json()) as ApiResponse<T>;
  // remainig code
}
async function main() {
  const user = await fetchData<User>("/api/users");
  const products = await fetchData<Product[]>("/api/products");
}
main();
```

# Conclusion 
Its make our code more reusable, flexible, and type safe. Instead of writing separate functions for different API responses, we can use a single generic function that handles different data structures by our expected type.



