import { EscortType } from "../types/data";

export const escortTypes: EscortType[] = [
	{
		text: "Обычное",
		value: "standard",
	},
	{
		text: "Расширенное",
		value: "extension",
	},
	{
		text: "VIP",
		value: "vip",
		hasMoreInfo: true,
		moreInfo:
			"Вас будут сопровождать на всем пути размещения и получения книги в физическом образце",
	},
];
