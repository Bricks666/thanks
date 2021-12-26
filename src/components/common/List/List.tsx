import classNames from "classnames";
import React, { ReactElement } from "react";
import { ListComponent } from "../../../types/components";

export const List: ListComponent = ({ className, items, Card, type }) => {
	const elements: ReactElement[] = items.map((item) => (
		<Card {...item} key={item.id} />
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
	}
};
