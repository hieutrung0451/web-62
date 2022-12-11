# Review ES6
## 1. Sự khác biệt nhé giữa let, const và var

* __Scope (Phạm vị):__
  * `var` -> global
  * `const`, `let`: function, block
  * __Ví dụ:__
    ```
    function run() {
      var a = "Foo";
      let b = "Bar";

      console.log(a, b); // Foo Bar

      {
        var c = "Fooz"
        let d = "Bazz";
        console.log(c, d); // Fooz Bazz
      }

      console.log(c); // Fooz
      console.log(d); // ReferenceError
    }
    ```
* __Assignment:__
  * `const`: không thể re-assign, ví dụ:
    ```
    const x = 1;
    x = 2; // Assignment to constant variable.

    ```
  * `var` và `let` là có thể, ví dụ:
    ```
    var x = 1;
    x = 2;
    console.log(x); // 2

    ```
    ```
    let x = 1;
    x = 2;
    console.log(x); // 2

    ```
* __Hoisting:__
  * `var` có thể sử dụng trước khi khai báo, ví dụ:
    ```
    console.log(x); // undefined
    var x = 1;
    ```
  * `let`, `const`  không thể sử dụng trước khi khai báo, ví dụ:
    ```
    console.log(x); // Cannot access 'x' before initialization
    let x = 1;
    ```
    ```
    console.log(x); // Cannot access 'x' before initialization
    const x = 1;
    ```
  

## 2. ES6
- ### map:
  - Function này được sử dụng với mục đích để “biến đổi” các phần tử trong mảng theo một “công thức” nhất định mà không thay đổi giá trị của mảng ban đầu. 
  - __Ví dụ:__
    ```
    const arr = [1, 2, 3];

    const arr2 = arr.map((item) => {
    return item * 2;
    });

    console.log(arr2); // [2, 4, 6]
    console.log(arr); // [1, 2, 3]
    ```
- ### filter:
  - Function này được sử dụng với mục đích để lọc các phần tử trong mảng theo một điều kiện nhất định mà không làm thay đổi giá trị của mảng ban đầu
  - __Ví dụ:__
    ```
      const arr = [1, 2, 3];
      const arr2 = arr.filter((item) => {
        return item % 2 === 0;
      });

      console.log(arr2); // [2]
      console.log(arr); // [1, 2, 3]
    ```
- ### reduce:
  - Function này được sử dụng để thực thi một function nhất định cho tất cả các phần tử của mảng, với một giá trị tịnh tiến và trả lại một giá trị duy nhất.
  - __Ví dụ:__
    ```
    const arr = [1, 2, 3, 4, 5]
    const sum = arr.reduce((total, item) => {
	    return total + item;
    }, 0);
    ```
- ### some: 
  - Function này được sử dụng để kiêm tra một phần tử trong mảng có phải là giá trị chẵn không, nếu có trả về true.
  - __Ví dụ:__
    ```
    const arr = [1, 2, 3, 4, 5];
    const even = (element) => element % 2 === 0;

    console.log(arr.some(even)); //true
    ```
- ### every:
  - Function này được sử dụng để kiểm tra tất cả các phần tử trong mảng có đáp ứng được điều kiện của function không, nếu có trả về `true`.
  - __Ví dụ:__
    ```
    const isBelowThreshold = (currentValue) => currentValue < 40;

    const arr = [1, 30, 39, 29, 10, 13];

    console.log(arr.every(isBelowThreshold)); // true
    ```
- ### find:
  - Function này trả lại __phần tử đầu tiên__ trong mảng đáp ứng được điều kiện của function.
  - __Ví dụ:__
    ```
    const arr = [5, 12, 8, 130, 44];

    const found = arr.find(element => element > 10);

    console.log(found); // 12
    ```
- ### findIndex:
  - Function này trả lại __vị trí của phần từ đầu tiên__ trong mảng đáp ứng được điều kiện của function.
  - __Ví dụ:__
    ```
    const arr = [5, 12, 8, 130, 44];

    const isLargeNumber = (element) => element > 13;

    console.log(arr.findIndex(isLargeNumber)); // 3
    ``` 
- ### for with index:
  - `for` dùng để lặp lại các câu lệnh dựa theo giá trị điều kiện đã cho, nếu điều kiện trả về là `true` thì tiếp tục lặp, nếu là `false` thì kết thúc vòng lặp.
  - __Ví dụ:__
    ```
    let str = '';

    for (let i = 0; i < 9; i++) {
      str = str + i;
    }

    console.log(str); // "012345678"
    ```
- ### for...in:
  - `for...in` dùng để lặp trong một object, lặp lại tất cả thuộc tính và giá trị của thuộc tính của object đó.
  - __Ví dụ:__
    ```
    const object = { a: 1, b: 2, c: 3 };

    for (const property in object) {
      console.log(`${property}: ${object[property]}`);
    }

    // "a: 1"
    // "b: 2"
    // "c: 3"
    ```
- ### for...of:
  - Vòng lặp `for...of` cũng tương tự như vòng lặp for, nhưng tường minh và dễ hiểu hơn.
  - __Ví dụ:__
    ```
    const arr = ['a', 'b', 'c'];

    for (const element of arr) {
      console.log(element);
    }

    // "a"
    // "b"
    // "c"
    ```
  - Tuy nhiên vòng lặp `for...of` không duyệt theo kiểu giảm dần giống như vòng lặp `for` được.
- ### forEach:
  - Function này dùng để duyệt qua mỗi phần tử trong mảng và thực hiện hành động nào đó.
  - __Ví dụ:__
    ```
    const arr = ['a', 'b', 'c'];

    arr.forEach(element => console.log(element));

    // "a"
    // "b"
    // "c"
    ```

## 3. Spread operator (...)
- Spread operator là một toán tử mới, giúp chúng ta có thể “trải phẳng” các phần tử của một đối tượng tập hợp (array, object, set).
- Cú pháp của spread operator là dấu ba chấm `...`.
- Ví dụ:
  ```
  const arr = [1, 2, 3];

  console.log(arr); // [1, 2, 3]
  console.log(...arr); // 1 2 3
  ```

## 4. String template (Literals string)
- Template literal là một cú pháp mới, giúp chúng ta dễ dàng thực hiện các thao tác nối chuỗi trên nhiều dòng. Với template literal, chúng ta có thể dễ dàng thêm các giá trị JS vào bên trong của một chuỗi ký tự mà không cần dùng phép nối chuỗi.
- Ví dụ:
  - Cách thông thường:
    ```
    const name = "MindX";
    const str = "hello " + name + "!";
    ```
  - Sử dụng Literals:
    ```
    const str = ` hello, ${name}! Welcome to our website`;
    ```
## 5. Arrow function
- Có 3 cách viết function:
  - Function expression:
    ```
    function sum(a, b) {
      console.log("sum 2 numbers");
	  return a + b;
    }
    ```
    - Hỗ trợ hoisting.

  - Anonymous function:
    ```
    const sum = function(a, b) {
	  console.log("sum 2 numbers");
	  return a + b;
    }
    ```
    - không hỗ trợ hoisting.
  - Arrow function:
    ```
    const sum = (a, b) => {
	  console.log("sum 2 numbers");
	  return a + b;
    }
    ```
    - Không hỗ trợ hoisting.
    - Không có binding `this` và `super`.
    - Không thể dùng như một "object constructor".

## 6. Destructuring
- Phép gán destructuring là một cú pháp cho phép “unpack” dữ liệu từ array, object trở thành các biến riêng biệt.

  - Object destructuring:
    - Cách thông thường:
      ```
      const person = {name: "MindX", age: 20}
      const name = person.name;
      const age = person.age;
      ```
    - Dùng Destructuring:
      ```
      const person = {name: "MindX", age: 7}
      const {name, age} = person;
      ```
  - Array destructuring:
    - Cách thông thường:
      ```
      const coordinate = [0, 1, 1];
      const x = coordinate[0];
      const y = coordinate[1];
      const z = coordinate[2];
      ```
    - Dùng Destructuring:
      ```
      const coordinate = [0, 1, 1];
      const [x, y, z] = coordinate;
      ```

## 7. Promise
- __Cách tạo một Promise:__
  ```
  let promise = new Promise((resolve, reject) => {
    // Code here.
  });
  ```
- `Promise` sẽ nhận vào một hàm callback gồm 2 tham số như sau:
  - __resolve:__ một function sẽ được gọi nếu đoạn code bất đồng bộ trong `Promise` chạy thành công.
  - __reject:__ một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise có lỗi xảy ra. `Promise` cũng cung cấp cho chúng ta 2 phương thức để xử lý sau khi được thực hiện:
    - __then():__ Dùng để xử lý sau khi `Promise` được thực hiện thành công (khi resolve được gọi).
    - __catch():__ Dùng để xử lý sau khi `Promise` có bất kỳ lỗi nào đó (khi reject được gọi).
  - __Ví dụ:__
    ```
    function getJSON() {
      return new Promise( function(resolve) {
          axios.get('https://tutorialzine.com/misc/files/example.json')
          .then(function(json) {
              resolve(json);
          });
      });
    }
    ```

- __Async/Await:__
  - Để định nghĩa một hàm bất đồng bộ với `async`, ta cần khai báo từ khóa `async` ngay trước từ khóa định nghĩa hàm:
    ```
    getUser = async () => { ... }
    ```
  - Giá trị trả về của AsyncFunction sẽ luôn là một *Promise * mặc cho bạn có gọi await hay không, nếu trong code không trả về Promise nào thì sẽ có một promise mới được resolve với giá trị lúc đầu (nếu không có giá trị nào trong return kết quả trả về sẽ là undefine). 
  - Promise này sẽ ở trạng thái thành công với kết quả được trả về qua từ khóa return của hàm `async`, hoặc ở trạng thái thất bại với kết quả được đẩy qua từ khóa throw trong hàm `async`.
  - Về cơ bản thì `await` giúp cho cú pháp trông dễ hiểu hơn, thay thì phải dùng `then()` nối tiếp nhau thì chỉ cần đặt `await` trước mỗi hàm mà chúng ta muốn đợi kết quả của thao tác bất đồng bộ. Chỉ dùng được `await` trong hàm nào có `async` đứng phía trước.
  - __Ví dụ:__
    ```
     async function getJSONAsync() {
        let json = await axios.get('https://tutorialzine.com/misc/files/example.json');

        return json;
    }
    ```

## 8. Class
- Trong JS, Class đơn giản là một “bản thiết kế” để tạo ra các objects. Với Class, chúng ta có thể định nghĩa ra các trường dữ liệu và các phương thức mà một object được tạo ra từ class đó sẽ có.
- __Ví dụ:__
  ```
  class Person() {
    constructor(name) {
      this.name = name
    }

    sayHello() {
      console.log(`Hello, my name is ${this.name}`)
    }
  }

  const personA = new Person("Alice")
  personA.sayHello() // Hello, my name is Alice

  const personB = new Person("Bob")
  personB.sayHello() // Hello, my name is Bob

  ```
  - Trong một class có 2 thành phần chính:
    - Properties: các thuộc tính mà object đó sở hữu ở đây là `name`.
    - Methods: các phương thức (function) mà object đó có thể gọi được ở đây là `sayHello()`.
  - Con trỏ `this` bên trong class đề cập tới thực thể riêng biệt của class đó. Trong ví dụ trên, `this` của `personA` sẽ riêng biệt với `this` của `personB`.

### Kế thừa và con trỏ `super`
- Một class có thể kế thừa một class khác. Kế thừa giúp cho class con có toàn bộ các thuộc tính và phương thức của class cha.
  ```
  class Person {
    constructor(name) {
      this.name = name
    }
    sayHello() {
      console.log(`Hello, my name is ${this.name}`)
    }
  }

  class Student extends Person {
    constructor(name, grade) {
      super(name)
      this.grade = grade
    }

    sayHello() {
      super.sayHello();
      console.log("I am grade " + this.grade)
    }
  }

  const studentA = new Student("Alice", 10)
  studentA.sayHello()
  ```
- Con trỏ super được sử dụng để có truy cập vào các giá trị được kế thừa từ class cha.