export default class ImageUtils {
	public static loadImageFromUrl(url: string): Promise<HTMLImageElement> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => {
				resolve(img);
			}
			img.src = url;

			img.onerror = () => {
				alert("Error while loading image");
			}
		});
	}
}