import { Component } from '@angular/core';


export class KnowledgeElement {
  public  knowledgE_USER_ID: number;
  public  knowledgE_NAME: string;
  public  knowledgE_DESCRIPTION: string;
  public  knowledgE_USER_SCORE: number;
}

@Component({
    moduleId:module.id,
    selector: "delivery-management",
    templateUrl:'./html/app.component.html',
    styleUrls: ['./content/app.component.css']
})  

export class AppComponent {
   // know =  new KnowledgeElement();
    title = 'Deliveries & Agents Management';
    copyRight = `${new Date().getFullYear()}  by Skills-as-a-Service ssaas `;
    constructor(){}
}