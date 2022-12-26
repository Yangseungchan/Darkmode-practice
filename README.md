# Next.js + Emotion 다크모드 구현체

## 설명


`Next.js`와 `Emotion`으로 구현한 다크모드 입니다. 구현사항은 다음과 같습니다.

- 시스템 선호도에 따라 사이트 내 테마 변경
- 버튼을 클릭하여 테마 변경
- 테마 변경 시 로컬스토리지에 지정한 테마값을 저장
- **새로고침 시 깜빡임 없음**

## 개선작업 전후 비교

<table>
   <tr>
     <td align="center" width="50%">깜빡임 개선 전</td>
     <td align="center" width="50%">깜빡임 개선 후</td>
   </tr>
   <tr>
     <td><img src="https://user-images.githubusercontent.com/38908080/209507264-daeb0546-4189-4642-9dd1-c40c65ed7c1b.gif"/></td>
     <td><img src="https://user-images.githubusercontent.com/38908080/209507285-cceb9bb7-a6ce-4c99-8909-300fa2f9165f.gif"/></td>
   </tr>
</table>



## 개발 환경

- Next.js v13.0.6
- Typescirpt v4.9.4
- React v18.2.0
- Node v17.3.1

[관련 블로그 자료](https://velog.io/@seungchan__y/SSR-%ED%99%98%EA%B2%BD%EC%9D%98-%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C-%EA%B9%9C%EB%B9%A1%EC%9E%84-%ED%98%84%EC%83%81-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)
