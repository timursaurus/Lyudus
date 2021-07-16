<template>
  <div>
    <nav>HEADER</nav>
    <main class="mx-auto max-w-4xl font-body prose prose-xl">
      <input type="text" placeholder="Заголовок" />
      <bubble-menu :editor="editor" v-if="editor" class="bubble-menu" :tippy-options="{ duration: 100 }">
        <button title="Жирный | Bold | Ctrl + B" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z" />
          </svg>
        </button>
        <button class="editor-button button" title="Курсив | Italic | Ctrl + I" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
          </svg>
        </button>
        <button title="Зачеркивание | Strikethrough | Ctrl + Shift + X" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.117H3v-2h18v2h-3.846zm-4.078-3H7.629a4.086 4.086 0 0 1-.481-.522C6.716 9.92 6.5 9.246 6.5 8.452c0-1.236.466-2.287 1.397-3.153C8.83 4.433 10.271 4 12.222 4c1.471 0 2.879.328 4.222.984v2.152c-1.2-.687-2.515-1.03-3.946-1.03-2.48 0-3.719.782-3.719 2.346 0 .42.218.786.654 1.099.436.313.974.562 1.613.75.62.18 1.297.414 2.03.699z"
            />
          </svg>
        </button>
        <button title="Ссылка" @click="setLink" v-if="!editor.isActive('link')" :class="{ 'is-active': editor.isActive('link') }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
            />
          </svg>
        </button>
        <button @click="editor.chain().focus().unsetLink().run()" v-if="editor.isActive('link')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
            />
          </svg>
        </button>
        <button title="Выделить | Highlight | Ctrl + Shift + H" @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242zm6.364 3.535a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zM4.283 16.89l2.828 2.829-1.414 1.414-4.243-1.414 2.828-2.829z"
            />
          </svg>
        </button>
        <button title="Код | Code | Ctrl + E" @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z" />
          </svg>
        </button>
        <button title="Цитата | Blockquote | Ctrl + Shift + B" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
            />
          </svg>
        </button>
        <button title="Расширить | Expand" @click="expanded = !expanded" v-show="expanded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
        </button>

        <button title="Минимизировать | Minimize" @click="expanded = !expanded" v-show="!expanded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
          </svg>
        </button>
        <button title="Заголовок | Heading | Ctrl + Alt + 2" v-show="!expanded" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" />
          </svg>
        </button>
      </bubble-menu>
      <floating-menu class="floating-menu" :tippy-options="{ duration: 100 }" :editor="editor" v-if="editor">
        <button title="Заголовок | Heading | Ctrl + Alt + 2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z" />
          </svg>
        </button>

        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
          </svg>
        </button>
        <button title="Горизонтальный разделитель | Horizontal rule" @click="editor.chain().focus().setHorizontalRule().run()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z" />
          </svg>
        </button>
      </floating-menu>
      <editor-content class="editor__content" :editor="editor" />
    </main>
  </div>
</template>

<script>
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
// import { Placeholder } from '@tiptap/extensions'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Code from '@tiptap/extension-code'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
  },

  data() {
    return {
      editor: null,
      expanded: false,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: `<p>d</p>`,
      editorProps: {
        attributes: {
          class: 'focus:outline-none',
        },
      },
      editable: true,
      extensions: [Document, Text, StarterKit, BubbleMenu, Link, Image, Code, Highlight, Typography],
    })
  },
  methods: {
    setLink() {
      const url = window.prompt('URL')

      this.editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    },
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang='scss' >
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
  mark {
    background-color: #ffe066;
  }

  code {
    background-color: #0d0d0d;
    color: #fff !important;
    border-radius: 0.25rem;
  }

  pre {
    background: #0d0d0d !important ;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  hr {
    height: 2px;
    background: #0d0d0d;
    max-width: 10rem;
    margin: auto;
  }

  ul,
  ol {
    padding: 0 1rem;
  }
  a {
    color: #0088ff !important;
    transition: 0.1s ease-in-out;
    text-decoration: underline;
    &:hover {
      color: #fd1616 !important;
    }
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid #0d0d0d !important;
    font-style: normal !important ;
    &:before {
      content: open-quote;
    }
    &:after {
      content: close-quote;
    }
    quotes: '' '' '«' '»' !important;
  }
}

.bubble-menu {
  display: flex;
  background-color: #0d0d0d;
  padding: 0.5rem;
  border-radius: 0.5rem;

  button {
    border: none;
    background: none;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    svg {
      fill: #fff;
    }

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}
.floating-menu {
  display: flex;
  background-color: #0d0d0d;
  padding: 0.5rem !important;
  border-radius: 0.5rem;
  margin-left: 1rem;
  color: #fff;

  button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;

    svg {
      fill: #fff;
    }

    &:hover,
    &.is-active {
      opacity: 1;
    }
  }
}
</style>