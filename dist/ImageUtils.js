export default class ImageUtils {
    static loadImageFromUrl(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.src = url;
            img.onerror = () => {
                alert("Error while loading image");
            };
        });
    }
}
//# sourceMappingURL=ImageUtils.js.map