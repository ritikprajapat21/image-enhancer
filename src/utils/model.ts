import { HfInference } from "@huggingface/inference";

export default async function enhanceImage(image: File) {
  // Initialize inference object
  const inference = new HfInference();

  //Providing input and models
  const result = await inference.imageToImage({
    model: "stabilityai/stable-diffusion-xl-refiner-1.0",
    inputs: image,
  });

  return result;
}
