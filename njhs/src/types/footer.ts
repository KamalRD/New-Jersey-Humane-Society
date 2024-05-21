export interface FooterSubElement {
    text: string,
    link: string,
}

export interface FooterElement {
    text: string,
    link: string,
    subItems?: Array<FooterSubElement>
}