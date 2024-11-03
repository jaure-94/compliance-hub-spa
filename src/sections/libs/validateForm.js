export default function validateForm(form) {
    let errors = {
        state: "validated",
        fromNameError: "",
        emailError: "",
        messageError: "",
    };

    if (form.from_name.length === 0) {
        errors.fromNameError = "Name is required";
        errors.state = "error";
    }

    if (form.email.length === 0) {
        errors.emailError = "Email is required";
        errors.state = "error";
    }

    if (form.message.length === 0) {
        errors.messageError = "Message is required";
        errors.state = "error";
    }

    return errors;
}