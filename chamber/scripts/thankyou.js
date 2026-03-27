document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  document.getElementById("results").innerHTML = `
    <p><strong>First Name:</strong> ${params.get("fname")}</p>
    <p><strong>Last Name:</strong> ${params.get("lname")}</p>
    <p><strong>Email:</strong> ${params.get("email")}</p>
    <p><strong>Phone:</strong> ${params.get("phone")}</p>
    <p><strong>Organization:</strong> ${params.get("orgtitle")}</p>
    <p><strong>Submitted:</strong> ${params.get("timestamp")}</p>
  `;
});