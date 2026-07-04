/* 슈퍼 진화 스토리 공략 — 공유 스크립트 */
(function () {
  "use strict";

  // 모바일 네비 토글
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // 접기/펼치기 아코디언
  var heads = document.querySelectorAll(".acc-head");
  heads.forEach(function (head) {
    head.addEventListener("click", function () {
      var body = head.nextElementSibling;
      var expanded = head.getAttribute("aria-expanded") === "true";
      head.setAttribute("aria-expanded", String(!expanded));
      if (body) body.classList.toggle("open", !expanded);
    });
  });

  // 신생 모달 (dialog): 카드 클릭 → 열기, ✕/바깥 클릭/ESC → 닫기
  document.querySelectorAll("[data-open]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dlg = document.getElementById(btn.getAttribute("data-open"));
      if (dlg && typeof dlg.showModal === "function") dlg.showModal();
    });
  });
  document.querySelectorAll("dialog [data-close]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dlg = btn.closest("dialog");
      if (dlg) dlg.close();
    });
  });
  document.querySelectorAll("dialog.sinsaeng-modal").forEach(function (dlg) {
    dlg.addEventListener("click", function (e) {
      var r = dlg.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right ||
          e.clientY < r.top || e.clientY > r.bottom) {
        dlg.close();
      }
    });
  });
})();
