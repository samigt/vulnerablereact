import React, { Component } from "react";

// Let's suppose this response is coming from a service and have
// some XSS attacks in the content...
const response = [
  {
    id: 1,
    title: "My blog post 1...",
    content: "<p>This is <strong>HTML</strong> code</p>",
  },
  {
    id: 2,
    title: "My blog post 2...",
    content: `<p>Alert: <script>alert(1);</script></p>`,
  },
  {
    id: 3,
    title: "My blog post 3...",
    content: `
      <p>
        <img onmouseover="alert('This site is not secure');" 
        src="attack.jpg" />
      </p>
    `,
  },
];

// Let's suppose this is our initialState of Redux
// which is injected to the DOM...
const initialState = JSON.stringify(response);

const removeXSSAttacks = (html) => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  // Removing the <script> tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, "");
  }

  // Removing all events from tags...
  html = html.replace(/ on\w+="[^"]*"/g, "");

  return {
    __html: html,
  };
};

class SanitizedXss extends Component {
  render() {
    // Parsing the JSON string to an actual object...
    const posts = JSON.parse(initialState);

    // Rendering our posts...
    return (
      <div className="Xss">
        {posts.map((post, key) => (
          <div key={key}>
            <h3>{post.title}</h3>
            <p>
              <strong>Secure Code:</strong>
            </p>
            <p>{post.content}</p>

            <p>
              <strong>Insecure Code dangerouslySetInnerHTML:</strong>
            </p>
            <p dangerouslySetInnerHTML={removeXSSAttacks(post.content)} />
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default SanitizedXss;
