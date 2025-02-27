document.addEventListener("DOMContentLoaded", function () {
    const commentInput = document.querySelector(".comment-input");
    const submitButton = document.querySelector(".submit-button");
    const commentList = document.querySelector(".comment-list");
  
    function addComment() {
        const commentText = commentInput.value.trim();
        if (commentText === "") {
            alert("댓글을 입력해주세요!");
            return;
        }
  
        const newComment = document.createElement("li");
        newComment.classList.add("comment-item");
        newComment.innerHTML = `
            <div class="comment-author">
                <span>방문자</span>
            </div>
            <div class="comment-content">${commentText}</div>
            <button class="delete-comment">X</button>
        `;
  
        commentList.appendChild(newComment);
        commentInput.value = "";
        commentInput.focus();
        commentList.scrollTop = commentList.scrollHeight;
  
        // 삭제 버튼 기능 추가
        newComment.querySelector(".delete-comment").addEventListener("click", function () {
            newComment.remove();
        });
    }
  
    submitButton.addEventListener("click", addComment);
  
    commentInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addComment();
        }
    });
  });
  