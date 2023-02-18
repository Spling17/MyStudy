/* 問題３：
* 「クロージャー（プライベート変数）」のレクチャーで作成
* したincrementと同じ機能を持つincrement関数をブロック
* スコープとクロージャーを利用して作成してみてください。
* 
* increment(); // 期待値->1
* increment(); // 期待値->2
* increment(); // 期待値->3
* increment(); // 期待値->4
*/

// function incrementFactory() {
//     let num = 0;
   
//     function increment(){
//         num = num + 1;
//         console.log(num);
//     }
//     return increment;
// }

// const increment = incrementFactory();

// increment();
// increment(); 
// increment();


{
   let num = 0;
   function increment() {
       num = num + 1;
       console.log(num);
   }
}
increment();
increment();
increment();
increment();