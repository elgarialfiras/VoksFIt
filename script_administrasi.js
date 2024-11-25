function openPreview(image) {
  const modal = document.getElementById('image-preview-modal');
  const modalImg = document.getElementById('modal-image');
  const captionText = document.getElementById('caption');

  modal.style.display = "flex"; // Tampilkan modal dengan flexbox
  modalImg.src = image.src; // Set gambar yang dipilih ke modal
  captionText.textContent = image.alt; // Set caption dari gambar
}

function closePreview() {
  const modal = document.getElementById('image-preview-modal');
  modal.style.display = "none"; // Sembunyikan modal
}
