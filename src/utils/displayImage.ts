export default function displayImage(
  image: File | Blob,
  img: HTMLImageElement,
) {
  const reader = new FileReader();

  reader.onload = function () {
    const dataUrl = reader.result || "";

    // Setting image tag src to the reader.result
    img.src = typeof dataUrl === "string" ? dataUrl : dataUrl.toString();
  };

  reader.readAsDataURL(image);
}
