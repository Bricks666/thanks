import classNames from "classnames";
import React, { ReactElement } from "react";
import { ListComponent } from "../../../types/components";

export const List: ListComponent = ({
	className,
	items,
	Card,
	type,
	indexedBy,
	itemClassName,
}) => {
	const elements: ReactElement[] = items.map((item) => (
		<Card {...item} key={item[indexedBy]} className={itemClassName} />
	));

	switch (type) {
		case "numbered": {
			return <ol className={classNames(className)}>{elements}</ol>;
		}
		case "unnumbered": {
			return <ul className={classNames(className)}>{elements}</ul>;
		}
		case "fake": {
			return <section className={classNames(className)}>{elements}</section>;
		}
		case "datalist": {
			return <dl className={classNames(className)}>{elements}</dl>;
		}
	}
};
