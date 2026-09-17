/* =========================================================
   js/check.js  - 입력값 검사 (JavaScript Validation)

   add.html 과 edit.html 에서 같이 사용합니다.

   쓰는 방법
   1) HTML 폼:  onsubmit="return checkAddForm();"
   2) HTML 맨 아래:  <script src="js/check.js"></script>

   함수가 false 를 돌려주면 다음 단계로 가지 않습니다.
   ========================================================= */

// 입력칸에서 값을 읽어오는 작은 도우미 함수
function getValue(id) {
  return document.getElementById(id).value.trim();
}

// 선택상자(select)는 trim 이 필요 없어서 따로 읽습니다
function getSelect(id) {
  return document.getElementById(id).value;
}

/* ---------------------------------------------------------
   공통 검사 6개
   과제에서 말한 Validation 예시를 그대로 넣었습니다.
   1. 필수값 입력 여부
   2. 문자열 길이
   3. 숫자 범위
   4. 이메일 형식
   5. 날짜 입력 여부
   6. Select 선택 여부
   --------------------------------------------------------- */
function checkBookForm() {
  var title = getValue("bookTitle");
  var author = getValue("author");
  var course = getValue("course");
  var price = getValue("price");
  var bookCondition = getSelect("bookCondition");
  var saleStatus = getSelect("saleStatus");
  var email = getValue("email");
  var regDate = getSelect("regDate"); // 날짜도 value 만 보면 됩니다

  // 1) 필수값: 비어 있으면 안 됨
  if (title === "" || author === "" || course === "") {
    alert("교재명, 저자, 과목명은 꼭 입력해야 합니다.");
    return false;
  }

  // 2) 문자열 길이: 교재명 2자 이상 50자 이하
  if (title.length < 2 || title.length > 50) {
    alert("교재명은 2자 이상 50자 이하로 입력하세요.");
    return false;
  }

  // 3) 숫자 범위: 가격 1000 ~ 200000
  var priceNum = Number(price);
  if (price === "" || isNaN(priceNum) || priceNum < 1000 || priceNum > 200000) {
    alert("가격은 1,000원 이상 200,000원 이하로 입력하세요.");
    return false;
  }

  // 4) 이메일 형식: @ 와 . 이 있어야 함 (초보자용 간단한 검사)
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("이메일 형식이 올바르지 않습니다. 예: student@handong.edu");
    return false;
  }

  // 5) 날짜 입력 여부
  if (regDate === "") {
    alert("등록일을 선택하세요.");
    return false;
  }

  // 6) Select 선택 여부: "선택하세요" 를 그대로 두면 value 가 "" 입니다
  if (bookCondition === "" || saleStatus === "") {
    alert("책 상태와 판매 상태를 선택하세요.");
    return false;
  }

  // 여기까지 오면 검사 통과
  return true;
}

// add.html 의 [추가] 버튼
function checkAddForm() {
  if (checkBookForm() === false) {
    return false; // 검사 실패면 멈춤
  }

  // 검사 성공 → 확인 창
  if (confirm("게시물이 추가됩니다.")) {
    alert("등록되었습니다. 목록 페이지로 이동합니다.");
    location.href = "index.html";
  }

  // 서버가 없어서 실제 저장은 하지 않습니다
  return false;
}

// edit.html 의 [수정] 버튼
function checkEditForm() {
  if (checkBookForm() === false) {
    return false;
  }

  if (confirm("게시물을 수정할까요?")) {
    alert("수정되었습니다. 상세 페이지로 이동합니다.");
    location.href = "view.html";
  }

  return false;
}
