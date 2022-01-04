export type Registration = (
	login: string,
	password: string
) => Promise<boolean>;
