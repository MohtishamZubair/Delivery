//import { Component, Input } from '@angular/core';
//import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//@Component({
//    selector: 'ngbd-modal-content',
//    template: `
//    <div class="modal-header">
//      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//        <span aria-hidden="true">&times;</span>
//      </button>
//      <h4 class="modal-title">Popup Title!</h4>
//    </div>
//    <div class="modal-body">
//      <p>Error Message : {{name}}!</p>
//    </div>
//    <div class="modal-footer">
//      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
//    </div>
//  `
//})
//export class NgbdModalContent {
//    @Input() name:string;
//    constructor(public activeModal: NgbActiveModal) { }
//}
////export class NgbdModalComponent {
////    constructor(private modalService: NgbModal) { }
////    open() {
////        const modalRef = this.modalService.open(NgbdModalContent);
////        modalRef.componentInstance.name = 'World';
////    }
////}
//@Component({
//    moduleId: module.id,
//    selector: "app-popup",
//    templateUrl: './html/popup.component.html'
//})
//export class AppPopUpComponent {
//    popUpMessage: string;
//    constructor(private modalService: NgbModal) {
//    }
//    @Input()
//    injectPopUp(messagePopup:string) {
//        this.popUpMessage = messagePopup;
//        this.open();
//    }
//    open() {
//        const modalRef = this.modalService.open(NgbdModalContent);
//        modalRef.componentInstance.name = this.popUpMessage;
//    }
//}
//# sourceMappingURL=app-popup.component.js.map