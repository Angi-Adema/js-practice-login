const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const errors = document.querySelector(".errors")
const errorList = document.querySelector(".errors-list")

form.addEventListener("submit", (e) => {
  //   e.preventDefault()
  const errorMessages = []
  clearErrors()

  if (username.value.length < 6) {
    errorMessages.push("Username must be at least 6 digits")
  }

  if (password.value.length < 10) {
    errorMessages.push("Password must contain at least 6 digits")
  }

  if (errorMessages.length > 0) {
    e.preventDefault()
    showErrors(errorMessages)
  }
})

function clearErrors() {
  while (errorList.children[0] != null) {
    errorList.removeChild(errorList.children[0])
  }
  errors.classList.remove("show")
}

function showErrors(errorMessages) {
  errorMessages.forEach((error) => {
    const listItem = document.createElement("li")
    listItem.innerText = error
    errorList.appendChild(listItem)
  })
  errors.classList.add("show")
}
