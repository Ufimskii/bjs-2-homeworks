function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    } else {
      let value = func(...args);
      cache.push({ hash, value });
      let cashLengh = cache.length;
      if (cashLengh > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + value);
      return "Вычисляем: " + value;
    }
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false,
    savedArgs,
    savedThis;

  return function (...args) {
    savedArgs = args;
    savedThis = this;
    if (!flag) {
      func.apply(this, savedArgs);
      flag = true;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      flag = false;
      func.apply(savedThis, savedArgs);
    }, ms);
  }
}

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false,
    savedArgs,
    savedThis;

  function wrapper (...args) {
    if (wrapper.count === undefined) wrapper.count = 0;
    savedArgs = args;
    savedThis = this;
    if (!flag) {
     
      func.apply(this, savedArgs);
      flag = true;
    }
    
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      flag = false;
      func.apply(savedThis, savedArgs);
      wrapper.count += 1;
    }, ms);
  }
  return wrapper;
}
