// قم بكتابة مصفوفة جديدة تحتوي على بقية ايام الاسبوع ,قم بدمج مصفوفة weekDays معها وحفظها في مصفوفة جديده باسم week :
const weekDays = ["Sunday", "Monday", "Tuesday"];
const restWeekDays = ["Wednesday", "Thursday", "Friday", "Saturday"];
const week = weekDays.concat(restWeekDays);
console.log(week);

//استخرج الكلمات التي تتكون من اكثر من 6 حروف وحفظ في مصفوفة longWords
// استخرج الكلمات التي تتكون من 4 حروف فقط واحفظها في مصفوفة shortWords
const words = ["knot", "roof", "snake", "humanity", "available", "automatic"];
const longWords = words.filter((element) => element.length > 6);
console.log("long words: " + longWords);
const shortWords = words.filter((element) => element.length == 4);
console.log("short words: " + shortWords);
//----
const num = [1, 9, 16, 15, 36, 45];
//من المصفوف التالية استخرج مصفوفة جديدة تقوم بتخزين مضروب العدد في نفسه
const powered = num.map((element) => element ** 2);
console.log("powered: " + powered);
//في مصفوفة جديده استخرج الجذر التربيعي للاعداد
const squared = num.map((element) => Math.sqrt(element));
console.log("squared: " + squared);
//من مصفوفة num استخرج اول قيمة تقبل القسيمة على 3 و على 5
console.log(
    "devidable by 3 and 5: " +
        num.find((element) => element % 3 === 0 && element % 5 === 0)
);
//من مصفوفة num استخرج اول عدد يقبل القسمة على 2
console.log("devidableBy2: " + num.find((element) => element % 2 === 0));
//قم بكتابة دالة جديدة تقوم بـدمج مصفوفة weekو مصفوفة num وحفظها في مصفوفه جديده وقم بطباعة محتويات المصفوفة الجديدة .
const merged = week.concat(num);
console.log("Merged: " + merged);

//اكتب داله تبحث عن الرقم 3 في المصفوفة التالية :
const number = ["5", "6", "3"];
console.log("found 3: " + number.find((ele) => ele == 3));

//حول مصفوفة week الى String

const stringWeek = week.join();
console.log(stringWeek);

//ول مصفوفة num الى Stringو ضع بين عنصر @

const stringNum = num.join("@");
console.log(stringNum);

//قم بعكس ترتيب مصفوفة week .

const reversedWeek = week.reverse();
console.log("Reversed Week: " + reversedWeek);

//حول النص التالي الى مصفوفة بحيث يكون كل عنصر هو جمله تنتهي بـفاصلة ,
const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit, Eveniet beatae ut sequi ipsa, labore commodi,";
const textArr = text.split(",");
console.log(textArr);
