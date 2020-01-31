import { Contractor } from '../shared/contractor.model';

export class Invoice {
    public number: string;
    public date: string;
    public contractor: string;
    public price: string;
    public contractors: Contractor[];

    constructor(number: string, date: string, contractor: string, price: string, contractors: Contractor[]) {
        this.number = number;
        this.date = date;
        this.contractor = contractor;
        this.price = price;
        this.contractors = contractors;
    }
}
