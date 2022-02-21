import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	imageurl: string;
	title?: string;
}