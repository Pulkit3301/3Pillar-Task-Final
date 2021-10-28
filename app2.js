const titleValue = document.querySelector(".blog-title");
const textValue = document.querySelector(".blog-txt");
const addBlogBtn = document.getElementById("blog-adder");
const blogContainer = document.querySelector(".dev-list-container");

let id = 0;
addBlogBtn.onclick = () => {
  id++;
  blogContainer.innerHTML += `
        <div class="single-dev">
            <i class="fas fa-camera"></i>
            <h5>${titleValue.value}</h5>
            <p>${textValue.value}</p>
            <i class="fas fa-comment comment-icon"></i>
            <div id="c-${id}" class="comment">
              <input id="c-text-${id}" type="text" class="comment-txt" placeholder="Add Your comment">
              <button id="comment-adder-${id}" class="comment-btn">
                <i class="fa fa-plus"></i>
              </button>
            </div>
              <div id="c-final-val-${id}" class="comment-final-val">
                <p id="c-value-${id}" class="comment-value"></p>
                <i id="c-trash-${id}" class="fas fa-trash"></i>
                </div>
            </div>
  `;
  const commentParent = document.getElementById(`c-${id}`);
  const commentShowVal = document.getElementById(`c-value-${id}`);
  const finalCommentContainer = document.getElementById(`c-final-val-${id}`);
  const commentAdder = document.getElementById(`comment-adder-${id}`);
  const commentDeleter = document.getElementById(`c-trash-${id}`);
  commentAdder.onclick = () => {
    const commentVal = document.getElementById(`c-text-${id}`);
    if (commentVal.value != "") {
      commentParent.classList.add("hide");
      finalCommentContainer.classList.add("show");
      commentShowVal.innerText = commentVal.value;
    }
  };
  commentDeleter.onclick = () => {
    finalCommentContainer.classList.remove("show");
    commentParent.classList.remove("hide");
  };
};
