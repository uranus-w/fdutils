// fdutils必须使用var定义，不然浏览器端和Node端不能同时处理
var fdutils = require('./asserts/fdutils.js');
var {assert , expect} = require('chai');

describe('fdutils.deepClone 的测试用例', function() {
  it(`fdutils.deepClone({
    	format: 'yyyy/mm/dd hh:ii',
    }) should return '{
      format: 'yyyy/mm/dd hh:ii',
    }'`, function () {
      let _prev = {
        format: 'yyyy/mm/dd hh:ii'
      };
      let _next = fdutils.deepClone(_prev);

    assert.equal(_prev.format, _next.format);
  });

  it(`fdutils.deepClone({
      date: new Date(),
    }) should return '{
      date: new Date(),
    }'`, function () {
      let _prev = {
        date: new Date(),
      };
      let _next = fdutils.deepClone(_prev);
      let _result = _prev.date !== _next.date && _prev.date.getTime() === _next.date.getTime();

    assert(_result);
  });

  it(`fdutils.deepClone({
      arr: [1,2],
    }) should return '{
      arr: [1,2],
    }'`, function () {
      let _prev = {
        arr: [1,2],
      };
      let _next = fdutils.deepClone(_prev);
      let _rusult = _prev.arr !== _next.arr && _prev.arr.join(',') === _next.arr.join(',');

    assert(_rusult);
  });

  it(`fdutils.deepClone({
      obj: {a: 1},
    }) should return '{
      obj: {a: 1},
    }'`, function () {
      let _prev = {
        obj: {a: 1},
      };
      let _next = fdutils.deepClone(_prev);
      let _rusult = _prev.obj !== _next.obj && _prev.obj.a === _next.obj.a;

    assert(_rusult);
  });

  it(`fdutils.deepClone({
      fn: function(){},
    }) should return '{
      fn: function(){},
    }'`, function () {
      let _prev = {
        fn: function(){},
      };
      let _next = fdutils.deepClone(_prev);
      let _rusult = _prev.fn === _next.fn;

    assert(_rusult);
  });
});