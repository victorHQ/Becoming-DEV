function modalOpen() {
  document.querySelector(".modal-overlay").classList.add("active");
  modalConfirm.focus();
}

function modalClose() {
  document.querySelector(".modal-overlay").classList.remove("active");
  resetValues();
}

function modalCloseConfirm() {
  modalConfirm.addEventListener("click", (event) => {
    this.modalClose();
  });

  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.addEventListener("keydown", (event) => {
    const keys = event.key;
    if (keys === "Enter") this.modalClose();
  });
}

// =================================== HTML Variables ===================================
const modalConfirm = document.querySelector(".confirm");
