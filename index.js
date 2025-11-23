console.log("Đây là website sinh nhật của hvy 💝")

window.alert("Chúc chị sinh nhật vui vẻ nho")

const envelope = document.getElementById("outer-envelope");
const btn = document.getElementById("envelope-btn");

btn.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

// Giá trị làm mờ background khi mở lá thư
const overlay = document.getElementById("backgroundBlind");

// Giá trị cho lá thư
const letters = document.getElementById("lettersJS");
const showBtn = document.getElementById("wish-button");
const closeLettersBtn = document.getElementById("closeLetters");
const giftBtn = document.getElementById("gift-btn");

// Giá trị cho phần chọn quà 
const backgroundGift = document.getElementById("gift");
const closeGiftBtn = document.getElementById("closeGift");
const backgroundConfirm = document.getElementById("confirmParents")
const confirmHidden = document.getElementById("confirm");
const confirmNo = document.getElementById("confirmNo");
const confirmYes = document.getElementById("confirmYes");
const images = document.querySelectorAll(".chooseImg")
let selectedGift;

// Xem lại phần quà
const flexGifts = document.getElementById("flexGift");
const rewatch = document.getElementById("btnRewatch");
const chosenGiftImg = document.getElementById("chosenGiftImg");
const closeReWatch = document.getElementById("closeReWatch");

// Viết điều ước
const Write = document.getElementById("btnWrite");
const sendBackground = document.getElementById("send");
const closeWrite = document.getElementById("closeWrite");
const saveWrite = document.getElementById("saveWish");

// Bản điều ước đã được lưu lại
const flexSend = document.getElementById("flexSend");
const reWrite = document.getElementById("reWrite");
const closeReWrite = document.getElementById("closeReWrite")

// Quà đã chọn (Code ngoài lề)
const YouHadOne = document.getElementById("Had");

// Ấn vào nút nhận thư để lá thư xuất hiện
showBtn.addEventListener("click", () => {
  letters.style.display = "flex";
  overlay.style.display = "none";
  closeLettersBtn.style.display = "flex";
});

// Thoát khỏi lá thư
closeLettersBtn.addEventListener("click", () => {
  letters.style.display = "none";
  overlay.style.display = "none";
});

// Ấn vào nhận quà để những phần quà xuất hiện và xóa hết lá thư
giftBtn.addEventListener("click", () => {
  letters.style.display = "none";
  overlay.style.display = "none";
  backgroundGift.style.display = "flex";
  closeGiftBtn.style.display = "flex";
});

// Thoát khỏi phần nhận quà
closeGiftBtn.addEventListener("click", () => {
  backgroundGift.style.display = "none";
  overlay.style.display = "none";
});

// Những hình ảnh của các món quà khi ấn sẽ được lưu lại
images.forEach(ima => {
  ima.addEventListener("click", () => {
    backgroundConfirm.style.display = "flex";
    confirmHidden.style.display = "block";
    backgroundGift.style.display = "none";
    selectedGift = ima.getAttribute("src");
  })
});

// Thoát khỏi phần xác nhận lấy quà hay không
confirmNo.addEventListener("click", () => {
  backgroundConfirm.style.display = "none";
  confirmHidden.style.display = "none";
  backgroundGift.style.display = "flex";
});

confirmYes.addEventListener("click", () => {
  localStorage.setItem("chosenGift", selectedGift);
  backgroundConfirm.style.display = "none";
  rewatch.style.display = "flex";
  chosenGiftImg.src = selectedGift;
  window.alert("Đã xác nhận phần quà. Nếu chị muốn xem lại phần quà thì ấn vào nút hộp quà gốc trên bên phải để xem lại nha");
});

// Nút xem lại phần quà vừa mới chọn
rewatch.addEventListener("click", () => {
  flexGifts.style.display = "flex";
  window.alert("Chị oi, em không thể nào biết được bên đây chị chọn món quà nào hếc á. Nên khi vào xem lại quà thì chị chụp lại màn hình và gửi lại cho em nho.")
})

// Thoát khỏi phần xem lại phần quà vừa chọn
closeReWatch.addEventListener("click", () => {
  flexGifts.style.display = "none";
  Write.style.display = "flex";
  window.alert("Chị oi, có phần viết điều ước nữa á. Phần này khong bắt buộc nhưng nếu chị có điều ước gì thì cứ để lại nha, phần đó là phần em đã thêm vào tối qua. Nó nằm kế nút xem lại quà khi chị thoát khỏi phần xem lại quà nha!")
})

// Vào phần viết điều ước
Write.addEventListener("click", () => {
  sendBackground.style.display = "flex";
})

// Lưu điều ước
saveWrite.addEventListener("click", () => {
  const Wish = wishText.value.trim();
  localStorage.setItem("userWish", Wish);
  window.alert("Điều ước của chị được lưu lại ròi, hãy ấn vào xem lại điều ước nho")
  sendBackground.style.display = "none";
  Write.style.display = "none";
  flexSend.style.display = "flex";
})

// Điều ước đã được lưu
flexSend.addEventListener("click", () => {
    window.alert("Chị oi, em cũm khong xem được chị viết điều ước như nào á 🥲 nên chị có thể chia sẻ cho bíc được hem, hem mún cũm hong chao. Nhưng mà những dì chị ghi ra thì em khong thể lưu lại được vì chưa bíc cách, nếu chị mún lưu làm kỉ niệm thì chụp màn hình lại để làm của riêng nho. Yêu chị nhìu 💝")
    const savedWish = localStorage.getItem("userWish") || "Chưa có điều ước nào được viết nho!";
    const resendContent = document.getElementById("ResendToContent");
    resendContent.textContent = savedWish;
    reWrite.style.display = "flex";
});

// Thoát khỏi phần xem lại điều ước
closeReWrite.addEventListener("click", () => {
  reWrite.style.display = "none";
})

// Thoát khỏi phần viết điều ước
closeWrite.addEventListener("click", () => {
  sendBackground.style.display = "none";
})

// Quà đã có (Code ngoài lề)
YouHadOne.addEventListener("click", () => {
  window.alert("Chị đã có trang phục này ròi chị iu oi! 🥲🥲🥲 Hãy ấn 'Xem xét lại' để nhận được món quà khác nho");
});
