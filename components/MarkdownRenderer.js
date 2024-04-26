import React from "react";
import ReactMarkdown from "react-markdown";

class MarkdownRenderer extends React.Component {
  render() {
    const { markdownText } = this.props;
    return <ReactMarkdown>{markdownText}</ReactMarkdown>;
  }
}

export default MarkdownRenderer;
