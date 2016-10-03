
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HelloWorld} from '../../../components';


@Component({
    selector: 'app',
    directives: [HelloWorld],
    template: `<input placeholder="Type Hello World!" (keyup)="onKeyUp(input)" #input>
               {{message}}
               <hello-world></hello-world>
               `
})
export class App {

    message = "";

    onKeyUp(input) {
        this.message = input.value;
    }

}

bootstrap(App);