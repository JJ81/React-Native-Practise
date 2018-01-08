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
 19. 
 