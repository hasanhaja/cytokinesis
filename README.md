[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)

# Cytokinesis

> Cytokinesis is the final process in eukaryotic cell division... [which] typically occurs at the end of mitosis ([source](https://biologydictionary.net/cytokinesis/))

This project was inspired by what [Storybook](https://github.com/storybookjs/storybook) enables for component library development and the power of [Mitosis](https://github.com/builderIO/mitosis). The purpose of this project is to start piecing together the developer experience of Mitosis with Astro to replicate the developer experience of building things with Storybook.

# Current features

- [x] Display mitosis output in an astro app
- [x] Select different components and framework variant to display 
- [x] Support for React, Solid and Svelte components working
- [ ] Support for web components
- [ ] Support for Vue components 

# Current limitations

- The structure of the output directory is hardcoded (e.g. `output/<framework>/src/components/[component]`)
- The astro app needs to be manually configured for the different frameworks
- There's currently no way to adjust any of the props of the components displayed
