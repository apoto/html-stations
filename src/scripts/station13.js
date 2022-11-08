data = "global data";

// このreturnDataに代入される関数の形をアロー関数に変えて"global data"が表示されるようにしてください
// ↓関数の中の処理は変更しないでください
const returnThisData = () => {
  return this.data;
};
// ↑関数の中の処理は変更しないでください

const object = {
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}

/*
// ↓関数の中の処理は変更しないでください
const returnThisData = function () {
  return this.data;
};
// ↑関数の中の処理は変更しないでください
*/

/*
デフォルト
const object = {
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}
*/

/*
コピペ
const object = {
  data: "object data",
  func: () => {
    returnThisData;
  },
};

function getData() {
  return object.func();
}
*/

// return getData((object) => object.func);

/*
funcのみアロー関数
const object = {
  data: "object data",
  func: () => {
    returnThisData;
  },
};
*/

/*
カッコで囲う
const object = () => ({
  data: "object data",
  func: returnThisData,
});

function getData() {
  return object.data();
}
*/
