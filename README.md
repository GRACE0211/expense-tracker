## useState 
```const [income,setIncome] = useState([]);```

const [state的名稱, 改變資料狀態的方法] = useState(state的初始值)

## useEffect

```
// STEP 1：載入 useEffect
import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
    console.log('invoke function component'); <-- 開始執行組件


    // STEP 2：使用 useEffect Hook
    useEffect(() => {
        console.log('execute function in useEffect'); <-- 執行useEffect內的函式
    });

    // handleClick ...

    return (
        <Container>
        {console.log('render')} <-- 渲染組件
        <WeatherCard>
            {/* ... */}
        </WeatherCard>
        </Container>
    );
};

export default WeatherApp;

```

console.log 出現的順序如下：
  1. console.log('invoke function component'); <-- 開始執行組件
  2. console.log('render') <-- 渲染組件
  3. console.log('execute function in useEffect'); <-- 執行useEffect內的函式

useEffect 內的 function 會在組件渲染完後被呼叫，要注意的是「渲染完後」才會呼叫，如果知道 callback function 的概念，這個 useEffect 內的函式就很像是組件渲染完後要執行的 callback function，
不管這個組件是第一次渲染還是重新渲染 useEffect 內的 function 一樣會在組件渲染完後被呼叫。

```useEffect(<didUpdate>, [dependencies])```

第二個參數稱作 dependencies，它是一個陣列，只要每次重新渲染後 dependencies 內的元素沒有改變，任何 useEffect 裡面的函式就不會被執行！

所以 useEffect 內的函式會在組件渲染完成後被呼叫，現在多了一個前提：「組件渲染完後，如果 dependencies 有改變，才會呼叫 useEffect 內的 function」
> 關於 useEffect 使用上最重要的一句就是：「組件渲染完後，如果 dependencies 有改變，才會呼叫 useEffect 內的 function」。


## useRef
Uncontrolled Components 並不會把資料交給 React 管理，而是自己選到該 ```<input />``` 元素後去從該 DOM 元素中把值取出來。在 React 中若想要選取到某一元素時，就可以使用 useRef 這個 React Hooks。

useRef 的基本用法如下：

+ 在 useRef 內可以放進一個預設值（initialValue）
+ useRef 會回傳一個物件（refContainer），這個物件不會隨著每一次畫面重新渲染而指稱到不同的物件，而是可以一直指稱到同一個物件
+ 在回傳的物件中，透過 refContainer.current 屬性可以取得預設值或更動後的值
```const refContainer = useRef(initialValue);```

如果是要把 useRef 當成 document.querySelector 來選取到某一元素的話，可以在該 HTML 元素上使用 ref 屬性，並把 useRef 回傳的物件放進去即可，例如：
```
const InputElement = () => (
    <input ref={refContainer} />
)
```
這時候剛剛建立的 refContainer.current 就會指稱到這個 ```<input>``` 元素。

套用到設定頁面
讓我們實際套用到地區設定頁面來看看可以怎麼用：

1. 先從 react 中取出 useRef 這個 Hook 來用
2. 使用 useRef 來建立可以一直被參照到的物件，將這個回傳的物件取名為 inputLocationRef
3. 在 ```<input>``` 的地方，不需要在使用 onChange 事件隨時更新 React 的資料狀態，而是透過 ref={inputLocationRef} 讓 inputLocationRef.current 可以指稱到這個 input 欄位
4. 透過 inputLocationRef.current 即可取得剛剛透過 ref 指稱的元素，並且透過 inputLocationRef.current.value 就可以取得該欄位的值
5. 對於 Uncontrolled Components 若想要定義預設值，可以在 ```<input>``` 欄位中使用 defaultValue

```
// STEP 1：從 react 中載入 useRef
import React, { useRef } from 'react';
import styled from '@emotion/styled';
// ...

const WeatherSetting = ({ setCurrentPage }) => {
  // STEP 2：使用 useRef 建立一個 ref，取名為 inputLocationRef
  const inputLocationRef = useRef(null);

  const handleSave = () => {
    // STEP 4：
    // 透過 inputLocationRef.current 可以指稱到該 input 元素
    // 透過 inputLocationRef.current.value 即可取得該 input 元素的值
    const locationName = inputLocationRef.current.value;
    console.log(locationName);
    // ...
  };

  return (

      // STEP 3：將 useRef 回傳的物件，指稱為該 input 元素
      // STEP 5：在 uncontrolled components 中可以使用 defaultValue 定義預設值
      <StyledInputList
        // ...
        ref={inputLocationRef}
        defaultValue="臺南市"
      />
};

export default WeatherSetting;
```


