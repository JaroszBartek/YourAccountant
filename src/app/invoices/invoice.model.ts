export class Invoice {
    public number: string;
    public date: string;
    public contractor: string;
    public price: string

    constructor(number: string, date: string, contractor: string, price: string) {
        this.number = number;
        this.date = date;
        this.contractor = contractor;
        this.price = price
    }
}