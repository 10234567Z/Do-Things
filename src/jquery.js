import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


export let dateSet = '';
export default function DateSelector() {
    $("#dueDate").on('change', function() {
        dateSet = this.value;
        });
}
