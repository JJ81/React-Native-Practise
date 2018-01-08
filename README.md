# React-Native-Practise

## Basic
1. npm install -g create-react-native-app <br />
2. make project by : create-react-native-app MyFirstApp <br />
3. move into the folder and npm start <br />
4. 인터넷 연결이 느려서 접속 문제로 인하여 create-react-native-app 실행이 지연되거나 안 될 수가 있다.<br />
5. 설치가 되고 나서 npm start 스크립트가 등록이 되지 않았을 수도 있다. <br />
6. node의 버전은 6이상이어야 한다. <br />
7. 초기 설치가 완료되고 몇 가지의 실행을 위한 커맨드 가이드가 나와야 정상이다. <br />
8. npm start 실행이 되지 않는다면 react-native-scripts 설치가 되어 있는지 살펴보자. <br />
9. [ERROR] 4:37:41 PM: Unable to start server
   See https://git.io/v5vcn for more information, either install watchman or run the following snippet: <br />
     sudo sysctl -w kern.maxfiles=5242880 <br />
     sudo sysctl -w kern.maxfilesperproc=524288 <br />
     
 10. 그리고 혹시나 몰라서 watchman도 추가로 설치함. <br />
 11. npm start를 통해서 ios 시뮬레이터를 실행을 시켜도 앱이 실행이 안되는 현상이 발생한다. <br />
 12. a를 누르고 android 시뮬레이터를 실행해보려고 하니 다음과 같은 메시지가 출력된다. <br />
 Error running adb: No Android device found. Please connect a device and follow the instructions here to enable USB debugging: <br />
 https://developer.android.com/studio/run/device.html#developer-device-options. If you are using Genymotion go to Settings -> ADB, select "Use custom Android SDK tools", and point it at your Android SDK directory.<br />
 
 13. 인터넷 상황을 개선하고 다시 시도를 해보았으나 마찬가지 상황이다. <br />
 14. android에서는 문제점을 아직 해결하지 못했고 ios에서는 expo앱을 실행이 되었다. <br />
 15. 이로서 드디어 에뮬레이터를 실행하는데 간신히 성공했다.<br />
 16. PROP 개념
 https://facebook.github.io/react-native/docs/props.html
 17. STATE 개념
 https://facebook.github.io/react-native/docs/state.html
 서버로부터 새로운 데이터가 전달될 때 새롭게 데이터를 state에 업데이트하게 된다. 
 Redux와 같은 컨테이너를 사용해서 데이터를 흐름을 제어할 수가 있다. 직접 setState을 호출하지 않고
 Redux를 사용해서 state 값을 수정하게 된다.
 18. Stylesheet으로 꾸미기를 할 때 각 컴포넌트의 JSX에 적용을 해야 한다. 하나의 컴포넌트로서 스타일시트를 관리할 수도 있고 동시에 여러 개의 스타일을 적용할 수도 있다.
 19. View안에 View를 넣을 수가 있다 내부에 있는 뷰는 self태그와 같이 독립적으로 닫으면 된다.
 20. flex로 view의 넓이는 조정하거나 width, height로 조정하게 된다. 대신 가장 바깥쪽에 있는 View 엘리먼트에 flex값이 설정되어 있어야 이에 감싼 컴포넌트가 보이게 된다
 21. 레이아웃 관련 프러퍼티는 아래 링크를 참고한다
 https://facebook.github.io/react-native/docs/layout-props.html
 22. View는 자체적으로 닫기도 하고 쌍으로 닫기도 한다. 헷갈리네.
 23. 이벤트를 통해서 함수를 호춣하기 위해서는 render 함수 바깥쪽에서 선언을 해야 한다.
 24. 가장 바깥쪽에 ScrollView로 감싸고 있어야 view가 넘쳐도 터치 스크롤이 가능하다.
 25. FlatList와 SectionList와의 차이점은 알겠는데 쓰임이 정확히 파악이 안된다.
 26. 서버로부터 데이터를 가져와서 데이터를 입히는 과정 (FetchAPI)
 https://developer.mozilla.org/en-US/docs/Web/API/Request
 27. 컴퍼넌트가 마운트 되었을 때 데이터를 불러온다. componentDidMount(){... fetch ...}
 28. fetch 대신 axios나 frisbee 등을 사용할 것을 고려해보자
 https://facebook.github.io/react-native/docs/network.html
 29. 데이터를 핸들링 하기 위한 라이브러리 사용에 대해서 비디오로 이해하기
 https://egghead.io/courses/getting-started-with-redux
 30. Development Tools 부분을 자세히 살펴볼 것
 https://facebook.github.io/react-native/docs/more-resources.html
 31. 기본적인 컴퍼넌트를 살펴본다.
 https://facebook.github.io/react-native/docs/components-and-apis.html
 32. 
 