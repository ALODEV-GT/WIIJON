import Swal, { SweetAlertIcon } from "sweetalert2";

export function modalAlert(title: string, message: string, typeAlert: SweetAlertIcon) {
    Swal.fire({
        title: title,
        text: message,
        icon: typeAlert,
        confirmButtonText: 'Cool'
    })
}


