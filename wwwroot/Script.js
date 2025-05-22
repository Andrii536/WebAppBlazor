
document.getElementById("fileTrigger").addEventListener("click", function () {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function () {
    if (this.files.length > 0) {
        document.getElementById("fileTrigger").textContent = "✅ Файл: " + this.files[0].name;
    }
});

document.getElementById("sendBtn").addEventListener("click", function() {
    const sentMsg = document.getElementById("sentMsg");
  
    sentMsg.style.display = "inline"; // Показати текст
    setTimeout(() => {
      sentMsg.style.display = "none"; // Приховати через 3 секунди
    }, 3000);
  });
