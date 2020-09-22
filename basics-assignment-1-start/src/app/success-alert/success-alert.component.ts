import { Component } from '@angular/core';

@Component({
    selector: 'app-successalert',
    template: `
        <p class="success">
            This is a success alert!
        </p>
    `,
    styles: [`
        .success {
            max-width: fit-content;
            text-align: center;
            padding: 20px;
            background-color: palegreen;
            font-size: 2rem;
            border: 2px solid green;
        }
        `
    ]
})
export class SuccessAlertComponent{ }