import { Component, Element } from '@stencil/core'
import MarkdownIt from 'markdown-it'
import stripIndent from 'strip-indent'

@Component({
  tag: 'markdown-renderer',
  styleUrl: 'markdown-renderer.css',
  shadow: true
})
export class MarkdownRenderer {
  @Element() host: HTMLElement;
  markdown = null

  componentWillLoad() {
    const markdown = new MarkdownIt();

    this.host.innerHTML = markdown.render(stripIndent(this.host.innerHTML), {
      html: true,
      breaks: true
    })
  }
  render() {
    return (
      <div><slot /></div>
    )
  }
}
