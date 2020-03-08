import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"; //스토어 생성 && 미들웨어 사용
import { Provider } from "react-redux"; //Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용
import thunk from "redux-thunk";
import rootReducer from "./modules"; //"./modules" 안에 있는 index.js파일을 자동으로 읽어 rootReducer를 읽어들인다.

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
