function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const hallTicket = document.getElementById('hallTicket').value.trim();
    const aadharNumber = document.getElementById('aadharNumber').value.trim();
    const dob = document.getElementById('dob').value;
    const rankCard = document.getElementById('rankCard').files[0];
    const photo = document.querySelector("input[type='file'][accept='image/*']").files[0];
    const branch = document.getElementById('branch').value;
    const district = document.getElementById('district').value;

    if (!firstName || !lastName) {
        alert("Please enter both first and last name.");
        return false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!dob) {
        alert("Please select your date of birth.");
        return false;
    }
    if (!mobile || mobile.length !== 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }
    if (!branch || branch === "") {
        alert("Please select a valid branch.");
        return false;
    }
    if (!district || district === "") {
        alert("Please select a valid district.");
        return false;
    }
    if (!aadharNumber || aadharNumber.length !== 12 || !/^\d+$/.test(aadharNumber)) {
        alert("Please enter a valid 12-digit Aadhar number.");
        return false;
    }
    if (!hallTicket || !/^\d+$/.test(hallTicket)) {
        alert("Please enter a valid numeric EAMCET hall ticket number.");
        return false;
    }
    if (!rankCard) {
        alert("Please upload your EAMCET rank card.");
        return false;
    }
    if (rankCard && rankCard.type !== "application/pdf") {
        alert("Only PDF files are allowed for the rank card.");
        return false;
    }
    return true;
}
