export type Login = (
	login: string,
	password: string,
	remember: boolean
) => Promise<boolean>;
