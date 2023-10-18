// 객체 : 자바스크립트에서 원시타입을 제외한 모든 값이 객체
// 속성과 값의 쌍으로 구성
// 객체는 객체리터럴을 사용하여 만듦, 속성(property)과 값(value)의 쌍으로 구성
// 자바스크립트에서 객체를 만드는 방법은 객체 객체리터럴을 사용하는 방법과 클래스를 사용하는 방법이 있음
// 객체리터럴로 객체를 만드는 것이 간단하고 직관적임


// 1.
const person = {
    title: "지구",
    name: "안유진",
    age: 21,
    job: "아이돌",
};
console.log(person);


//2.
const person2 = {
    name : {
        firName : "안",
        LasName : "유진"
    },
    age : 21,
    isAdult : true,
    info : function() {
        return `${this.name}`, 
                `${this.age}`;
    }
}
console.log(person2.info());
console.log(person2['name']);


// 3. 객체의 속성 변경하기
// person2 : 주소를 갖고 있는 객체. 따라서, 주소는 고정 되어 있고 그 내부의 변수들은 값이 변해도 됨
person2.name.firName = "11";
console.log(person2['name']);


// 4. 객체의 속성 동적으로 추가하기. 프로그램 실행 중(run)에 추가 혹은 삭제가 이루어짐
const carInfo = {};
carInfo.name = "리어카";
carInfo.year = "23/10/18";
carInfo.maxSpeed = "120km";
console.log(carInfo);


// 5. 객체 리터럴 삭제하기(동적)
delete carInfo.year;
console.log(carInfo);


// 6. 객체 메서드 : 객체 내부에서 동작하는 함수. 즉, 프로퍼티에 저장된 값의 타입이 함수를 의미함. 
const person3 = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
person3.sayHello(); // 출력: 'Hello, my name is John.'


// 7. 생성자. 생성자로 객체 생성하기. 함수 이름이지만 객체를 생성하기 위해서는 대문자로 선언
function Person(name, age, addr, job) {
    this.name = name;
    this.age = age;
    this.addr = addr;
    this.job = job;
}

const person5 = new Person("안유진", 21, "서울", "가수");
console.log(person5);
















