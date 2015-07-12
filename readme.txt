=== Plugin Name ===
Contributors: Alghost
Donate link: http://blog.alghost.co.kr/
Tags: naver,map,useful,
Requires at least: 3.0.1
Tested up to: 4.2.2
Stable tag: 4.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

검색  API/지도 API를 이용하여 네이버 지도를 손쉽게 추가할 수 있도록 도와주는 플러그인입니다.

== Description ==

이 플러그인은 포스트에 네이버 지도를 손쉽게 추가할 수 있도록 도와주는 플러그인입니다.
네이버 지도 API와 검색 API 중 지역 API를 이용하여 네이버 지도와 유사한 검색 결과를 다룰 수 있습니다.

이 플러그인은 개인적으로 필요하여 제작하였으나 많은 분들이 도움이 될 수 있을 것 같아
공개하였습니다.

php개발이 처음이라 버그가 있을 수 있습니다. 블로그나 메일을 통하여 알려주시면 수정하도록 하겠습니다.


주요 기능
*   모바일 접속시 네이버 지도앱과 연동 가능한 버튼 제공
*   검색 API 활용으로 인한 우수한 검색 결과 제공

필요한 기능이나 개선점에 대해서는 블로그/메일을 통해 알려주시면
빠른 시일내에 반영하도록 하겠습니다.

== Frequently Asked Questions ==

= 버그가 발견 되었습니다. =

개발자 (alghost.lee@gmail.com)로 버그가 발생한 시나리오와 현상에 대해 메일 보내주세요.

= API 키는 어디서 얻죠? =

네이버 OpenAPI ( http://developer.naver.com/wiki/pages/OpenAPI )에 방문하셔서 검색 API와 지도 API를 발급 받으시면 됩니다.

== Screenshots ==

1. 설정 페이지에서 네이버 개발자센터의 OpenAPI로부터 발급받은 검색 API와 지도 API를 저장합니다.
2. 플러그인 설치를 완료한 경우 에디터에 지도아이콘이 생깁니다.
3. 지도아이콘을 클릭한 후 나타난 팝업에서 검색을 한 후 링크를 클릭하면 스크립트가 생성됩니다.
4. 버튼을 누르면 에디터에 스크립트가 삽입됩니다.
5. 이를 블로그 포스트에서 확인해보면 지도가 표기되는걸 볼 수 있습니다.

== Installation ==

1. 플러그인 다운로드
1. wp-content/plugins 에 추가
1. 플러그인 관리자 페이지에서 활성화
1. 글쓰기 에디터에 지도 버튼이 생긴것을 확인

or

2. 플러그인 관리자의 플러그인 추가에서 플러그인 선택후 설치
2. 위 3번부터 진행

== Changelog ==

= 1.1 =
* 보안상의 이슈로 file_get_contents 사용불가인 상황을 위해 함수변경(CURL 이용)

= 1.0 =
* 초기 베타 버전

== Upgrade Notice ==

= 1.1 =
* 보안상의 이슈로 file_get_contents 사용불가인 상황을 위해 함수변경(CURL 이용)

= 1.0 =
* 초기 베타 버전
