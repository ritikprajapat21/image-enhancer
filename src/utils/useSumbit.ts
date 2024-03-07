import enhanceImage from "./model";
import displayImage from "./displayImage";

export default async function useSubmit() {
  // Selecting form element
  const form = document.getElementById("form") as HTMLFormElement;

  // Accessing form data
  const formData = new FormData(form)!;

  // Getting the submitted image
  const image = formData.get("image") as File;

  //Selecting the image tag
  const image1 = document.getElementById("uploadedImage") as HTMLImageElement;

  // Displaying the uploaded image
  displayImage(image, image1);

  // Enhancing the image
  const resultImage: Blob = await enhanceImage(image);

  //Selecting the image tag
  const image2 = document.getElementById("enhancedImage") as HTMLImageElement;

  // Displaying the uploaded image
  displayImage(resultImage, image2);

  return { blob: resultImage, fileName: image.name };
}
