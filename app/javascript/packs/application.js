// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

function getMeta(metaName) {
  const metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }

  return '';
}

export class TodoController extends Stimulus.Controller {
  static targets = [ "completed" ]
  toggle(event) {
    let formData = new FormData();
    formData.append("todo[done]", this.completedTarget.checked);
    formData.append("not_redirect", true);
    const url = this.data.get("update-url");
    fetch(url, {
      body: formData,
      method: 'PATCH',
      credentials: "include",
      dataType: "script",
      headers: {
        "X-CSRF-Token": getMeta('csrf-token')
      },
    }).then(function(response) {
      if (response.status != 204) {
        event.target.checked = !event.target.checked
      } else {
        location.reload();
      }
    })
  }
}

(() => {
  const application = Stimulus.Application.start();
  application.register("todo", TodoController)
})();
