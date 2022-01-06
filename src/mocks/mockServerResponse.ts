export const mockServerResponse = <T>(response: T, responseTime: number) => {
	return new Promise<T>((resolve) => {
		setTimeout(() => resolve(response), responseTime);
	});
};
