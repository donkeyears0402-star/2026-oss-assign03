# Assignment 03 - Multi-Page CRUD Frontend UI

**학번:** 21901037  
**이름:** 이준형 (Junhyung Lee)

## GitHub Repository

https://github.com/2026-2-OSS/assign03-c01-21901037

## Vercel Deploy URL

https://2026-oss-assign03-six.vercel.app/

---

## Weekly Review

### Service Topic

**캠퍼스 중고교재 관리**  
한동대 학생들이 전공 교재를 사고 팔 수 있는 게시판 화면입니다.

### Data Fields

8개 Field를 사용했습니다.

| Field | 설명 | 입력 방식 |
|-------|------|-----------|
| 교재명 | 책 이름 | 텍스트 |
| 저자 | 책을 쓴 사람 | 텍스트 |
| 과목명 | 이 책을 쓰는 수업 이름 | 텍스트 |
| 가격 | 판매 가격(원) | 숫자 |
| 책 상태 | 최상 / 상 / 중 / 하 | 선택(select) |
| 판매 상태 | 판매중 / 예약중 / 판매완료 | 선택(select) |
| 판매자 이메일 | 연락할 이메일 | 텍스트 |
| 등록일 | 글을 올린 날짜 | 날짜 |

### List Page

`index.html` 표에는 아래 5개 Field를 보여줍니다.

1. 번호
2. 교재명 (클릭하면 `view.html`로 이동)
3. 과목명
4. 가격
5. 판매상태

### Validation

`js/check.js` 파일에 검사를 모아 두었고, `add.html` / `edit.html`에서 같이 불러 씁니다.

1. **필수값** — 교재명, 저자, 과목명이 비어 있으면 안 됨
2. **문자열 길이** — 교재명은 2자 이상 50자 이하
3. **숫자 범위** — 가격은 1,000원 ~ 200,000원
4. **이메일 형식** — `@`와 `.`이 들어 있어야 함
5. **날짜 입력 여부** — 등록일을 꼭 선택
6. **Select 선택 여부** — 책 상태, 판매 상태를 꼭 선택

추가 버튼은 `confirm("게시물이 추가됩니다.")`  
수정 버튼은 `confirm("게시물을 수정할까요?")`  
삭제 버튼은 `confirm("이 게시물을 삭제할까요?")` 를 사용합니다.

### RWD

Desktop / Mobile 두 환경을 같이 맞췄습니다.

- HTML에 `viewport` 메타 태그를 넣었습니다.
- Bootstrap Grid (`row`, `col-md-6`)로 폼을 넓은 화면에서는 2열, 휴대폰에서는 1열로 배치했습니다.
- 표는 `table-responsive`로 감싸서 휴대폰에서 좌우 스크롤이 됩니다.
- 메뉴는 `navbar-expand-md` + `navbar-toggler`로 휴대폰에서 접힙니다.
- `my.css`의 `@media (max-width: 767px)`에서 제목 크기, 버튼 폭, 상세보기 한 줄 배치를 따로 조정했습니다.

### Bootstrap

사용한 주요 클래스 / 컴포넌트:

- `container`, `row`, `col`, `col-md-6`
- `navbar`, `navbar-toggler`, `collapse`
- `table`, `table-responsive`, `table-hover`
- `form-control`, `form-select`, `form-label`
- `btn`, `card`, `badge`, `album` 카드 그리드 (`example.html`)

`example.html`은 [Bootstrap Album 예제](https://getbootstrap.com/docs/5.3/examples/album/)를 최대한 비슷하게 따라 만들었습니다.

### Problem & Solution

**문제 1:** 처음에는 CSS를 각 HTML 파일 안에 따로 써서, 메뉴 색깔을 바꾸려면 파일을 4번 고쳐야 했습니다.

**해결:** 공통 디자인을 `my.css`로 분리하고, 모든 페이지에서 `<link rel="stylesheet" href="my.css">`로 연결했습니다.

**문제 2:** 휴대폰에서 표가 화면보다 넓어 글자가 잘렸습니다.

**해결:** 표를 `<div class="table-responsive">`로 감싸고, `my.css`에 모바일용 글자 크기와 버튼 폭을 추가했습니다.

### Reflection

- Bootstrap은 미리 만들어진 클래스 이름만 붙이면 버튼, 표, 반응형 배치가 나와서 편했습니다.
- `col-md-6`처럼 화면 크기 이름이 들어간 클래스가 Media Query를 대신해 준다는 점이 흥미로웠습니다.
- Validation은 `if`문과 `alert()`만으로도 충분히 만들 수 있었습니다. 아직 서버가 없어서 데이터가 저장되지는 않습니다. 다음에는 입력한 내용이 목록에 실제로 남는 방법을 공부하고 싶습니다.
