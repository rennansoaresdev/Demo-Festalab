import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

// Ask delete confirmation
document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("click", function(event) {
    if (event.target && event.target.id === "delete-user-btn") {
      if (!confirm("Tem certeza de que deseja deletar este usuário?")) {
        event.preventDefault();
      }
    }
  });
});
