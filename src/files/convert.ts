import { readFileSync } from 'fs';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

/**
 * Converts a file from disk to a `Base64` encoded string.
 * Paths are resolved relative to the current working directory of the process.
 * @param filePath - Absolute or relative path to the file on disk.
 * @returns A Promise that resolves to the Base64 string of the file.
 */
export async function fileToBase64(filePath: string): Promise<string> {
	const absolutePath = resolve(process.cwd(), filePath);

	const buffer = await readFile(absolutePath);

	return buffer.toString('base64');
}

/**
 * Converts a file (from disk) to a `Base64` encoded string in Node.js.
 * @param filePath - The path of the file.
 * @returns The Base64 encoded string of the file.
 */
export function fileToBase64Sync(filePath: string): string {
	const absolutePath = resolve(process.cwd(), filePath);

	const fileBuffer = readFileSync(absolutePath);

	return fileBuffer.toString('base64');
}

/**
 * Creates a virtual file and returns its Base64 encoded content.
 * @param content - The string content of the file.
 * @returns The Base64 encoded representation of the content.
 */
export function createVirtualFileBase64(content: string): string {
	const buffer = Buffer.from(content, 'utf-8');
	return buffer.toString('base64');
}

/**
 * Creates a virtual file from a Base64 string.
 * @param base64 - The Base64 encoded string.
 * @param fileName - The name of the file.
 * @param mimeType - The MIME type of the file (default: "application/octet-stream").
 * @returns A File object.
 */
export function base64ToFile(
	base64: string,
	fileName: string,
	mimeType = 'application/octet-stream'
): File {
	const byteCharacters = atob(base64);
	const byteArrays: Uint8Array[] = [];

	for (let i = 0; i < byteCharacters.length; i += 512) {
		const slice = byteCharacters.slice(i, i + 512);
		const byteNumbers = new Array(slice.length);
		for (let j = 0; j < slice.length; j++) {
			byteNumbers[j] = slice.charCodeAt(j);
		}
		byteArrays.push(new Uint8Array(byteNumbers));
	}

	const blob = new Blob(byteArrays, { type: mimeType });
	return new File([blob], fileName, { type: mimeType });
}

/**
 * Encodes a text string into a Base64-encoded string.
 * @param text - The text to encode.
 * @returns The Base64-encoded representation of the text.
 */
export function textToBase64(text: string): string {
	return btoa(encodeURIComponent(text));
}

/**
 * Decodes a Base64-encoded string back to a text string.
 * @param base64 - The Base64 string to decode.
 * @returns The decoded text string.
 */
export function base64ToText(base64: string): string {
	return decodeURIComponent(atob(base64));
}
