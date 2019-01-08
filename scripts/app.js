import {MDCRipple} from '@material/ripple/index';

const ripple = new MDCRipple(document.querySelector('.mdc-button'));
var x = document.getElementsByClassName('mdc-button');
var i;
for (i = 0; i < x.length; i++) {
    MDCRipple.attachTo(x[i]);
}
var x = document.getElementsByClassName('ripple-light-bg');
var i;
for (i = 0; i < x.length; i++) {
    MDCRipple.attachTo(x[i]);
}
var x = document.getElementsByClassName('ripple-dark-bg');
var i;
for (i = 0; i < x.length; i++) {
    MDCRipple.attachTo(x[i]);
}

import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

import {MDCList} from '@material/list';
const list = new MDCList(document.querySelector('.mdc-list'));
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
