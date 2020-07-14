let wrapper: HTMLDivElement = document.createElement('div');
wrapper.id = "wrapper";

let title: HTMLHeadingElement = document.createElement('h1');
title.innerText = "Welcome to your new project!";

let body: HTMLSpanElement = document.createElement('span');
body.innerHTML = "Take a look around, and <b>insert your code</b> in <span class='code'>src/</span><br />"
	+ "<span class='code'>gulp</span> will build the <b>entire project</b>, add any <b>preprocessors</b> or <b>additional tasks</b> in <span class='code'>gulpfile.js</span>";

wrapper.appendChild(title);
wrapper.appendChild(document.createElement('hr'));
wrapper.appendChild(body);
document.body.appendChild(wrapper);